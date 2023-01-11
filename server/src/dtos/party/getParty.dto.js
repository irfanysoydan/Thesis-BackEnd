class GetPartyDto {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.image = data.image;
    this.person = data.person;
    this.result = data.result;
  }
}

module.exports = GetPartyDto;
