// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Reinforce {
    string[] public phraseArray;

    constructor(string memory _first) noBlanks(_first) {
        phraseArray.push(_first);
    }

    modifier noBlanks(string memory _phrase) {
        require(
            bytes(_phrase).length > 0,
            "must enter a random word or phrase"
        );
        _;
    }

    function showAllPhrases() public view returns (string[] memory) {
        return phraseArray;
    }

    function addPhraseToArray(
        string memory _phrase
    ) public noBlanks(_phrase) returns (bool success) {
        phraseArray.push(_phrase);

        success = true;
        return success;
    }
}
