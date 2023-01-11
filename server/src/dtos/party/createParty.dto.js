class CreateElectionDto {
  constructor(data) {
    this.name = data.name;
    this.person = data.person;
    this.image = data.image;
  }
}

module.exports = CreateElectionDto;
