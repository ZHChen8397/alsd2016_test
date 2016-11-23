Feature: Certificate
  
  Scenario: Generate Certificates
    Given I prepare data for generate certificates
    When I send the background of the certificate to backend
    And I send student and course information to backend
    Then I receive certificates
