// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract TccUser {
    // interface of the user we are trying to save
    struct User {
        string username;
        string fullname;
        address walletAddress;
    }

    // bytes array data type
    mapping(string => User) public users;

    mapping(address => string) public userNames;

    modifier isUserRegitered(string memory _username) {
        require(
            bytes(users[_username].username).length == 0,
            "Username already exist!"
        );
        _;
    }

    function registerUser(
        string memory _username,
        string memory _fullname,
        address _walletAddress
    ) public isUserRegitered(_username) {
        users[_username] = User(_username, _fullname, _walletAddress);
        // store usernames
        userNames[_walletAddress] = _username;
    }

    // get current username
    function getCurrentUserName(address _walletAddress)
        public
        view
        returns (string memory)
    {
        require(
            bytes(userNames[_walletAddress]).length > 0,
            "Unable to find username!"
        );

        return (userNames[_walletAddress]);
    }

    // check if username exist
    function userExist(string memory _username) public view {
        require(
            bytes(users[_username].username).length > 0,
            "Invalid username!"
        );
    }

    // valid login
    function login(string memory _username, address _walletAddress)
        public
        view
        returns (User memory)
    {
        userExist(_username);
        User memory user = users[_username];
        require(
            user.walletAddress == _walletAddress,
            "Invalid wallet address!"
        );

        return (user);
    }
}
