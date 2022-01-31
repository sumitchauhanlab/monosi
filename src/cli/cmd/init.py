import os

from cli.config import ProjectConfiguration
from cli.utils.yaml import write_file

class InitCmd(object):
    @classmethod
    def from_args(cls, args=None):
        return cls()

    def run(self):
        project_name = "monosi-repo"
        project_directory = os.path.join(os.getcwd(), project_name)

        if os.path.exists(project_name):
            print("Directory {} already found. Could not initialize.".format(project_name))
            return

        args = None
        project_configuration = ProjectConfiguration(
            root_path=os.path.abspath(os.getcwd()),
            project_name="monosi-repo",
            workspace_name="default",
        )
        os.mkdir(project_directory)

        project_file = os.path.join(project_directory, 'monosi_project.yml')
        write_file(project_file, project_configuration.to_dict())

        print("Successfully initialized monosi project: {}".format(project_name))
