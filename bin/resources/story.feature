Feature: echo

  Scenario Outline: Hello User!
    Given name "<A>" for echo method
    When I ask echo
    Then I receive "<B>"

    Examples: 
      | A     | B            |
      | Dopiz | Hello Dopiz! |
      | James | Hello James! |
      
  
