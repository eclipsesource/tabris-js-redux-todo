import {Set, Attributes, Composite, Row, ToggleButton} from 'tabris';
import {connect} from 'tabris-decorators';
import {VisibilityFilters} from '../redux-types';
import {setVisibilityFilter} from '../redux-actions';

const {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} = VisibilityFilters;

export const Footer = connect<Composite>(

  state => ({
    apply: {
      '#all': Set(ToggleButton, {checked: state.visibilityFilter === SHOW_ALL}),
      '#active': Set(ToggleButton, {checked: state.visibilityFilter === SHOW_ACTIVE}),
      '#completed': Set(ToggleButton, {checked: state.visibilityFilter === SHOW_COMPLETED})
    }
  }),
  dispatch => ({
    apply: {
      '#all': Set(ToggleButton, {onSelect: () => dispatch(setVisibilityFilter(SHOW_ALL))}),
      '#active': Set(ToggleButton, {onSelect: () => dispatch(setVisibilityFilter(SHOW_ACTIVE))}),
      '#completed': Set(ToggleButton, {onSelect: () => dispatch(setVisibilityFilter(SHOW_COMPLETED))})
    }
  })

)((attributes: Attributes<Row>) =>

  <Composite height={72} padding={4} {...attributes}>
    <ToggleButton id='all' left={8} right='66% 4' font='14px'>All</ToggleButton>
    <ToggleButton id='active' left='33% 4' right='33% 4' font='14px'>Active</ToggleButton>
    <ToggleButton id='completed' left='66% 4' right={8} font='14px'>Completed</ToggleButton>
  </Composite>

);
