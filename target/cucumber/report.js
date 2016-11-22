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
  "name": "name \"\u003cA\u003e\" for echo method",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I ask echo",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I receive \"\u003cB\u003e\"",
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
        "A",
        "B"
      ],
      "line": 9,
      "id": "echo;hello-user!;;1"
    },
    {
      "cells": [
        "Dopiz",
        "Hello Dopiz!"
      ],
      "line": 10,
      "id": "echo;hello-user!;;2"
    },
    {
      "cells": [
        "James",
        "Hello James!"
      ],
      "line": 11,
      "id": "echo;hello-user!;;3"
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
  "name": "name \"Dopiz\" for echo method",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I ask echo",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I receive \"Hello Dopiz!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Dopiz",
      "offset": 6
    }
  ],
  "location": "EchoStepdefs.Method(String)"
});
formatter.result({
  "duration": 135251260,
  "status": "passed"
});
formatter.match({
  "location": "EchoStepdefs.AskEcho()"
});
formatter.result({
  "duration": 77003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello Dopiz!",
      "offset": 11
    }
  ],
  "location": "EchoStepdefs.Receive(String)"
});
formatter.result({
  "duration": 2031266,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Hello User!",
  "description": "",
  "id": "echo;hello-user!;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "name \"James\" for echo method",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I ask echo",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I receive \"Hello James!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 6
    }
  ],
  "location": "EchoStepdefs.Method(String)"
});
formatter.result({
  "duration": 98478,
  "status": "passed"
});
formatter.match({
  "location": "EchoStepdefs.AskEcho()"
});
formatter.result({
  "duration": 29590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello James!",
      "offset": 11
    }
  ],
  "location": "EchoStepdefs.Receive(String)"
});
formatter.result({
  "duration": 83421,
  "status": "passed"
});
});