class Team{
  teamname = 'Example teamname'
  trainer = 'Example trainername'
  roster = []

  constructor(teamname, trainer, roster){
    this.teamname = teamname;
    this.trainer = trainer;
    this.roster = roster;
  }

  describe(){
    return `${trainer} is the trainer of team ${teamname} and the next pokemon are in this team: ${roster}`;
  }
}

export default Team;