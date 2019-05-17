TestCase('DOM TESTS', {
    "test leaderboard before": async function(){
         assertEquals(0, leaderBoardTestBeforeClick());
    },
    "test leaderboard after":  async function() {
         assertEquals(15, leaderBoardTestAfterClick());
    },
    "test help before":  async function() {
        assertEquals(0, helpButtonBeforeClick());
    },
    "test help after":  async function() {
        assertEquals('block', helpButtonAfterClick());
    },
    "test settings before": async function(){
        assertEquals(0, settingsBeforeClick());
    },
    "test settings after": async function(){
        assertEquals('block', settingsAfterClick());
    }
});