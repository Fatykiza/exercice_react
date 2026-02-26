import Card from "./card";
import Description from "./description";
import SkillsList from "./skills";

function App(){
    return(
    <div className="card">
     <Card>
     <Description/>
     <SkillsList/>
     </Card>
    </div>
    );
}

export default App