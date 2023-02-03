import { Button, ButtonGroup, GridColumn, GridRow, Item,  Segment } from "semantic-ui-react";
import { Category } from "../../app/models/category";


interface Props {
    categories: Category[];
  }
  
  export default function CategoryMenu({ categories }: Props) {
    return (
      <Segment inverted color="violet">
       
      
        
          <ButtonGroup  className="categoriesbutton">
        {categories.map((category) => (
           <Item  key={category.id}>
      
        <Button size='big' >{category.name}</Button>
        
        </Item>
        
        ))}
        </ButtonGroup>
        
         
       
        </Segment>
    );
  }