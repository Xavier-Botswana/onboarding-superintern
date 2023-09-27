interface TheText {
  fieldtitle: string;
}
function FieldTitle(props: TheText) {
  return (
    <div className="mb-4">
      <p className="text-lg text-white" style={{ textAlign: "left" }}>
        {props.fieldtitle}
      </p>
    </div>
  );
}

export default FieldTitle;
