class CreateElectionDto {
  constructor(data) {
    this.name = data.name;
    this.parties = data.parties;
    this.image = data.image;
  }
}

module.exports = CreateElectionDto;
