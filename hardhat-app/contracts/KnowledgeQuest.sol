
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract KnowledgeQuest {

    struct Quest {
        string title;
        string description;

        string topic;

        uint funds_to_disburse;
        uint num_winners;
        uint[] rewards_spec;

        address payable quest_admin;
    }

    uint num_quests;
    mapping(uint => Quest) quests;

    function createQuest(
        string title, string description, string topic,
        uint funds_to_disburse, uint num_winners, uint[] rewards_spec
    )  returns (uint quest_id) {
        quest_id = num_quests++;

        Quest storage q = quests[quest_id];
        q.title = title;
        q.description = description;
        q.topic = topic;
        q.funds_to_disburse = funds_to_disburse;
        q.num_winners = num_winners;
        q.rewards_spec = rewards_spec;
        q.quest_admin = msg.sender;
    }
}