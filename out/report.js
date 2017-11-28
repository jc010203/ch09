$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("nicebank/cash_withdrawal.feature");
formatter.feature({
  "line": 2,
  "name": "cash withdrawal",
  "description": "",
  "id": "cash-withdrawal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 947489365,
  "status": "passed"
});
formatter.before({
  "duration": 336410,
  "status": "passed"
});
formatter.before({
  "duration": 6356640,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "successful withdrawal from account in credit",
  "description": "",
  "id": "cash-withdrawal;successful-withdrawal-from-account-in-credit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have deposited $100.00 in my account",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I withdraw $20.00",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "$20.00 should be dispensed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the balance of my account should be $80.00",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "$100.00",
      "offset": 17
    }
  ],
  "location": "AccountSteps.iHaveDeposited$InMyAccount(Money)"
});
formatter.result({
  "duration": 318451471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20.00",
      "offset": 11
    }
  ],
  "location": "TellerSteps.iWithdraw$(Money)"
});
formatter.result({
  "duration": 6759099562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20.00",
      "offset": 0
    }
  ],
  "location": "CashSlotSteps.$ShouldBeDispensed(Money)"
});
formatter.result({
  "duration": 4028574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80.00",
      "offset": 36
    }
  ],
  "location": "AccountSteps.theBalanceOfMyAccountShouldBe$(Money)"
});
formatter.result({
  "duration": 1575163,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4358249005,
  "status": "passed"
});
formatter.after({
  "duration": 22309005,
  "status": "passed"
});
formatter.after({
  "duration": 48772,
  "status": "passed"
});
});