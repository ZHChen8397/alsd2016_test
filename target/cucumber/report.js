$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/story.feature");
formatter.feature({
  "line": 1,
  "name": "echo",
  "description": "",
  "id": "echo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Hello User!",
  "description": "",
  "id": "echo;hello-user!",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "api url \"\u003cmethod\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I ask url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I receive \"\u003cString\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "echo;hello-user!;",
  "rows": [
    {
      "cells": [
        "method",
        "String"
      ],
      "line": 9,
      "id": "echo;hello-user!;;1"
    },
    {
      "cells": [
        "/",
        "Hello world."
      ],
      "line": 10,
      "id": "echo;hello-user!;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Hello User!",
  "description": "",
  "id": "echo;hello-user!;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "api url \"/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I ask url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I receive \"Hello world.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/",
      "offset": 9
    }
  ],
  "location": "EchoStepdefs.readURL(String)"
});
formatter.result({
  "duration": 235433831,
  "status": "passed"
});
formatter.match({
  "location": "EchoStepdefs.askAPI()"
});
formatter.result({
  "duration": 1230568748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello world.",
      "offset": 11
    }
  ],
  "location": "EchoStepdefs.Receive(String)"
});
formatter.result({
  "duration": 1848860,
  "status": "passed"
});
});