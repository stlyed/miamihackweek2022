/**
 * status - active: the user have not vote on the proposal yet and the time did not expired
 * status - close: the user have or haven't voted on it and the tinme is expired
 *
 * desicion: true if the user voted for the proposal, false if the user voted against
 *
 */
const proposalsSample = [
    {
        name: 'Proposal 2',
        subject: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto commodi consequuntur cupiditate error ex id, iure laudantium magnam natus, placeat porro reiciendis rem tempora tempore temporibus vitae. Eligendi, molestias?',
        status: 'active',
        start_date: '05/11/2021',
        end_date: '20/11/2021',
        decision: null,
    },
    {
        name: 'Proposal 1',
        subject: 'lambo players deserve better',
        text: 'Give lambo to top 5 players',
        status: 'active',
        start_date: '03/11/2021',
        end_date: '10/11/2021',
        decision: null,
    },
    {
        name: 'Proposal 0',
        subject: 'we don\'t have enough dolls',
        text: 'Make more dolls',
        status: 'closed',
        start_date: '03/10/2021',
        end_date: '10/10/2021',
        decision: null,
    },
]

export default proposalsSample
