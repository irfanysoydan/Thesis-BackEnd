class CreateUserDto {
  constructor(data) {
    this.idNumber = data.idNumber;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.password = data.password;
    this.birthYear = data.birthYear;
  }
}

module.exports = CreateUserDto;
