// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ICars{
       function create(address _owner, string memory _model) external;
        function getCar(
        uint _index
    )
        external
        view
        returns (address owner, string memory model, address carAddr, uint balance);
}
