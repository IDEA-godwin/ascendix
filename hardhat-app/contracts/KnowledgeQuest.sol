
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract KnowledgeQuest {

    struct Quest {
        string quest_info_url;
        uint funds_to_disburse;
        uint num_winners;
        uint[] rewards_spec;

        address payable quest_admin;
    }

    uint num_quests;
    mapping(uint => Quest) quests;
    

    function createQuest(
        uint funds_to_disburse, uint num_winners, uint[] rewards_spec
    )  returns (uint quest_id) {
        quest_id = num_quests++;

        Quest storage q = quests[quest_id];

        q.funds_to_disburse = funds_to_disburse;
        q.num_winners = num_winners;
        q.rewards_spec = rewards_spec;
        q.quest_admin = msg.sender;
    }
}