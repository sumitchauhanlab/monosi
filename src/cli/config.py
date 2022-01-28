from dataclasses import dataclass, field
from typing import Any, Dict, List, Tuple
import os

from cli.utils.files import file_find
import cli.utils.yaml as yaml

class DatasourceConfig(object):
    pass

DEFAULT_WORKSPACES_DIR = os.path.expanduser('~/.monosi')

@dataclass
class WorkspaceConfiguration:
    sources: Dict[str, DatasourceConfig] = field(default_factory=list())
    name: str = "default"
    workspaces_dir: str = DEFAULT_WORKSPACES_DIR # TODO: Update to args
    
    @staticmethod
    def _config_from_source(source_dict: Dict[str, Any]):
        # from monosi.drivers.factory import load_config

        # if 'type' not in source_dict:
        #     raise Exception("Source type is required.")

        # driver_type = source_dict.pop('type')
        # try:
        #     cls = load_config(driver_type)
        #     data = cls.retrieve_data(source_dict)
        #     cls.validate(data)
        #     config = cls.from_dict(data)
        # except Exception as e:
        #     raise e

        config = DatasourceConfig()
        return config

    def validate(self):
        pass

    @classmethod
    def from_dict(cls, workspace_dict: Dict[str, Any], source_name: str = 'default'):
        sources = {}
        if 'sources' in workspace_dict:
            for source in workspace_dict['sources']:
                source = cls._config_from_source(source)
                sources['default'] = source

        return cls(
            sources=sources,
        )
        
    @classmethod
    def _get_workspace_dict(cls, workspace_name: str, all_workspaces_dict: Dict[str, Any]):
        if workspace_name not in all_workspaces_dict:
            raise Exception("Workspace not found: {}".format(workspace_name))

        return all_workspaces_dict[workspace_name]

    @classmethod
    def from_args(cls, args=None) -> 'WorkspaceConfiguration':
        try:
            workspaces_path = file_find(DEFAULT_WORKSPACES_DIR, 'workspaces.y*ml')
        except:
            raise Exception("Could not find workspaces configuration file.")

        workspace_name = "default"
        # TODO: Should check args or project config for a workspace name
        all_workspaces_dict = yaml.parse_file(workspaces_path)
        workspace_dict = cls._get_workspace_dict(workspace_name, all_workspaces_dict)

        return cls.from_dict(workspace_dict)


@dataclass 
class ProjectConfiguration:
    project_name: str
    root_path: str
    workspace_name: str
    # source_name: str
    version: str = '0.0.3' # TODO: Pull from one location
    monitor_paths: List[str] = field(default_factory=lambda: ['./monitors'])
    
    @classmethod
    def from_root_path(cls, root_path: str) -> 'ProjectConfiguration':
        project_config_path = file_find(root_path, 'monosi_project.y*ml')
        project_dict = yaml.parse_file(project_config_path)

        return cls.from_dict(
            root_path=root_path,
            project_dict=project_dict,
        )

    @classmethod
    def validate(cls, project_dict):
        pass

    @classmethod
    def from_dict(
        cls,
        root_path: str,
        project_dict: Dict[str, Any],
    ):
        try:
            cls.validate(project_dict)
        except Exception as e:
            raise e

        project_name = str(project_dict.get('name'))
        version = project_dict.get('version') or '0.0.3'
        workspace_name = project_dict.get('workspace') or 'default'
        source_name = project_dict.get('source')
        log_path: str = project_dict.get('log-path') or 'logs'

        monitor_paths: List[str] = project_dict.get('monitor-paths') or []

        project = cls(
            project_name=project_name,
            version=version,
            root_path=root_path,
            workspace_name=workspace_name,
            # source_name=source_name,
            monitor_paths=monitor_paths,
        )

        return project



@dataclass
class Configuration(WorkspaceConfiguration, ProjectConfiguration):
    def __post_init__(self):
        try:
            Configuration.validate(self)
        except Exception as e:
            raise e

    @classmethod
    def validate(cls, self):
        pass

    @classmethod
    def create_subclasses(cls, args: Any) -> Tuple[ProjectConfiguration, WorkspaceConfiguration]:
        root_path = os.getcwd()
        if hasattr(args, 'project_dir'):
            root_path = args.project_dir

        project = ProjectConfiguration.from_root_path(root_path)

        # workspace_name = (project.workspace_name or 'default')
        # source_name = (project.source_name or 'default')
        workspace = WorkspaceConfiguration.from_args(
            # workspace_name=workspace_name, 
            # source_name=source_name,
            args=args
        )

        return (project, workspace)

    @classmethod
    def from_subclasses(cls, project: ProjectConfiguration, workspace: WorkspaceConfiguration, args) -> 'Configuration':
        return cls(
            project_name=project.project_name,
            version=project.version,
            root_path=project.root_path,
            monitor_paths=project.monitor_paths,
            workspace_name=project.workspace_name,
            sources=workspace.sources,
            # source_name=project.source_name,
            # reporter=project.reporter,
            # config=workspace.config,
            # send_anonymous_stats=workspace.send_anonymous_stats,
            # args=args
        )

    @classmethod
    def from_args(cls, args: Any) -> 'Configuration':
        project, workspace = cls.create_subclasses(args)
        configuration = cls.from_subclasses(
            project=project,
            workspace=workspace,
            args=args
        )

        return configuration

    def project_dict(self):
        config_dict = {
            "name": self.project_name,
            "version": self.version,
            "monitor-paths": self.monitor_paths,
        }
        if self.workspace_name:
            config_dict.update({"workspace": self.workspace_name})
        # if self.source_name:
        #     config_dict.update({"source": self.source_name})

        return config_dict

    def add_monitor_path(self, path):
        if path not in self.monitor_paths:
            self.monitor_paths.append(path)
            
            project_config_path = file_find(self.root_path, "monosi_project.y*ml")
            project_dict = self.project_dict()

            yaml.write_file(project_config_path, project_dict)

