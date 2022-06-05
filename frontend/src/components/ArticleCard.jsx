import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
const ArticleCard = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const { item, visibility } = props;
  console.log("Merge" + visibility);
  const loc = useLocation();
  const header = (
    <div
      alt="Card"
      style={{
        backgroundImage: "url('https://i.imgur.com/Rodf2QI.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "300px",
        width: "400px",
      }}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <span style={{ display: "flex", justifyContent: "center" }}>
      <Button
        label="View Article"
        icon="pi pi-search"
        style={{
          fontSize: "14px",
          marginRight: "10px",
          width: "200px",
          position: "initial",
        }}
        onClick={() =>
          navigate(`/article-details/${item.id}`, {
            state: { email: loc.state.email },
          })
        }
      />
      {visibility ? (
        <Button
          label="Generate Analysis"
          icon="pi pi-plus"
          style={{
            fontSize: "14px",
            marginLeft: "10px",
            width: "200px",
            position: "initial",
          }}
          onClick={() =>
            navigate(`/generate-analysis/${item.id}`, {
              state: { email: loc.state.email },
            })
          }
        />
      ) : (
        <p></p>
      )}
    </span>
  );
  return (
    <>
      <Card
        title={item.title}
        style={{
          width: "400px",
          height: "650px",
          textAlign: "justify",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        footer={footer}
        header={header}
      >
        {/* de vazut cum nu afectez contentul... afisare partiala fara a afecta  */}
        <p style={{ lineHeight: "1.5" }}>{item.content.substr(0, 200)}...</p>
      </Card>
    </>
  );
};

export default ArticleCard;
