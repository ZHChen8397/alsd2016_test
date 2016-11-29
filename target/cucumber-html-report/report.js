$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/imdb_rest.feature");
formatter.feature({
  "line": 1,
  "name": "IMDB rest api gets",
  "description": "",
  "id": "imdb-rest-api-gets",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I query movie by \"\u003ctitle\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "response should contain \"\u003cgenres\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;",
  "rows": [
    {
      "cells": [
        "title",
        "genres"
      ],
      "line": 10,
      "id": "imdb-rest-api-gets;get-many-movies-by-title;;1"
    },
    {
      "cells": [
        "http://140.124.183.89:8787/",
        "Hello World!"
      ],
      "line": 11,
      "id": "imdb-rest-api-gets;get-many-movies-by-title;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I query movie by \"http://140.124.183.89:8787/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "response should contain \"Hello World!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://140.124.183.89:8787/",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 179774593,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 97881626,
  "error_message": "org.json.JSONException: A JSONArray text must start with \u0027[\u0027 at 1 [character 2 line 1]\n\tat org.json.JSONTokener.syntaxError(JSONTokener.java:432)\n\tat org.json.JSONArray.\u003cinit\u003e(JSONArray.java:107)\n\tat org.json.JSONArray.\u003cinit\u003e(JSONArray.java:145)\n\tat ALSD.CucumberTest.JsonReader.readJsonFromUrl(JsonReader.java:32)\n\tat ALSD.CucumberTest.ImdbSteps.I_make_the_rest_call(ImdbSteps.java:29)\n\tat ✽.When I make the rest call(resources/imdb_rest.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World!",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "status": "skipped"
});
});