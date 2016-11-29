Feature: Get API

  Scenario Outline: Get API!
    Given api url "<method>"
    When I ask url
    Then I receive "<String>"

    Examples: 
      | method	|	String			|
      |			|	Hello world.	|
      