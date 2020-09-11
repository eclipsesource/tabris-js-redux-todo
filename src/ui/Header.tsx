import {Attributes, Row, TextInput, Button, EventObject, Widget} from 'tabris';
import {addTodo} from '../redux-actions';
import {resolve} from 'tabris-decorators';
import {StateProvider} from 'tabris-decorators';

export const Header = (attributes: Attributes<Row>) => {

  return (
    <Row height={72} alignment='bottom' padding={8} {...attributes}>
      <TextInput style='underline'
          layoutData={{left: 4, top: 4, right: 8}}
          font='18px'
          onAccept={accept}
          message='New Task'/>
      <Button style='flat'
          layoutData={{left: 12, right: 4}}
          font='18px'
          text='Add'
          onSelect={accept}/>
    </Row>
  );

  function accept({target}: EventObject<Widget>) {
    const textInput = target.parent(Row).find(TextInput).only();
    const text = textInput.text;
    if (text) {
      textInput.text = '';
      resolve(StateProvider).dispatch(addTodo(text));
    }
  }

};
