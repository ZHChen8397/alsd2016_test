$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/certificate.feature");
formatter.feature({
  "line": 1,
  "name": "Certificate",
  "description": "",
  "id": "certificate",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Generate Certificates",
  "description": "",
  "id": "certificate;generate-certificates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I prepare data for generate certificates",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I send the background of the certificate to backend",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I send student and course information to backend",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I receive certificates",
  "keyword": "Then "
});
formatter.match({
  "location": "CertificateStep.Prepare()"
});
formatter.result({
  "duration": 934249198,
  "status": "passed"
});
formatter.match({
  "location": "CertificateStep.SendBackGround()"
});
formatter.result({
  "duration": 12075,
  "status": "passed"
});
formatter.match({
  "location": "CertificateStep.SendInfo()"
});
formatter.result({
  "duration": 8452,
  "status": "passed"
});
formatter.match({
  "location": "CertificateStep.Receive()"
});
formatter.result({
  "duration": 10264,
  "status": "passed"
});
});