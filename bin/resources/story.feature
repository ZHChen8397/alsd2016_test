Feature: echo

  Scenario Outline: Hello User!
    Given api url "<method>"
    When I ask url
    Then I receive "<String>"

    Examples: 
      | method	|	String			|
      |	/		|	Hello world.	|
      
  
