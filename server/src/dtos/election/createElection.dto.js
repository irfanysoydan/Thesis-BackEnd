class GetElectionDto {
  constructor(data) {
    this.name = data.name;
    this.parties = data.parties;
  }
}

module.exports = GetElectionDto;
