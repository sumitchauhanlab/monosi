import requests
import sys
import json

from server.integrations.base import BaseIntegration

class SlackIntegration(BaseIntegration):
    @classmethod
    def configuration_schema(cls):
        return {
            "type": "object",
            "properties": {
                "url": {"type": "string", "title": "Slack Webhook URL"},
            },
            "secret": [ "url" ],
        }

    @staticmethod
    def _create_request_data(message):
        body = {
            "text": message
        }
        byte_length = str(sys.getsizeof(body))
        headers = {'Content-Type': "application/json", 'Content-Length': byte_length}
        return json.dumps(slack_data)

    def alert(self, message):
        url = self.configuration['url']
        data = self._create_request_data(message)

        try:
            response = requests.post(url, data=data, headers=headers)

            if response.status_code != 200:
                raise Exception(response.status_code, response.text)
        except:
            raise Exception("Request to Slack webhook URL {} failed.".format(url))
