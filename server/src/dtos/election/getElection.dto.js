class GetElectionDto {
  constructor(data) {
    this.name = data.name;
    this.parties = data.parties;
    this.isFinished = data.isFinished;
    this.winner = data.winner;
    this.image = data.image;
  }
}

module.exports = GetElectionDto;
