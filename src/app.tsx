import {contentView} from 'tabris';
import {ListView} from 'tabris-decorators';

contentView.append(
  <ListView stretch items={['Hello', 'World']}/>
);
