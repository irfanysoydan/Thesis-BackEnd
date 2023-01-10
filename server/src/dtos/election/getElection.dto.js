class GetElectionDto {
  constructor(data) {
    this.name = data.name;
    this.parties = data.parties;
    this.isFinished = data.isFinished;
    this.winner = data.winner;
  }
}

module.exports = GetElectionDto;
