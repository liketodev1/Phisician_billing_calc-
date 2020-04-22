

const initialState = {
billingData: [
  {id: 1, infoText: 'Actionable Potential Income', total: '300'},
  {id: 2, infoText: 'Number of patient this month', total: '800'},
  {id: 3, infoText: 'Preventative Care Bonus(es) Obtained', total: '30'},
  {id: 4, infoText: 'Outside Use', total: '45'},
  {id: 5, infoText: 'Access Bonus', total: '90'},
  {id: 6, infoText: 'Group Access Bonus Calculation', total: '600'},
  {id: 7, infoText: 'Number of patient this month', total: '20'},
  {id: 8, infoText: 'Outside Use', total: '300'},
  {id: 9, infoText: 'Actionable Potential Income', total: '80'},
]
};

export default function dataReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD':
      return {
        counter: state.counter + 1
      };
    case 'SUB':
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
}
