// ** Core Layout Import
// !Do not remove the Layout import
import Layout from "layout/AppLayout";

// ** Menu Items Array

const AppLayout = (props) => {
  return (
    <Layout menuData={[]} {...props}>
      {props.children}
    </Layout>
  );
};

export default AppLayout;
