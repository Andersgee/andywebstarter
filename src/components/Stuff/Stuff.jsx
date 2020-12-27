import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import Link from "../Link";
import Img from "../Img";
import useImages from "../../hooks/useImages";
import { withState } from "../../state";
import "./Stuff.css";

function Stuff(props) {
  const images = useImages();
  const VAR1 = process.env.GATSBY_VAR1;

  const handleClick = () => {
    props.setState({
      data: { a: props.state.data.a + 1, b: 9 },
      user: !props.state.user,
    });
  };

  return (
    <Typography variant="body1" component="span">
      <Typography variant="h4" align="center">
        Boilerplate for setting up a <br />
        react, gatsby, redux, materialui project.
      </Typography>
      <Typography variant="body2" align="center">
        Notes to any reader including self: This example component
        (src/components/Stuff) is just to show some features set up, such as
        having access to a shared state (props.state and props.setState) simply
        by doing withState(Stuff) etc
      </Typography>
      <Box my={2}>
        <Box>props.state.user: {props.state.user ? "true" : "false"}</Box>
        <Box>props.state.data.a: {props.state.data.a}</Box>
        <Box>props.state.data.b: {props.state.data.b}</Box>
        <Button variant="contained" onClick={handleClick}>
          Modify Redux State
        </Button>
      </Box>
      <Box my={2}>
        theme.js to specify custom color palette and fontfamily (use
        plugins/gatsby-plugin-top-layout/TopLayout.js to get another font)
      </Box>
      <Box my={2} className="specialbox">
        This box is styled with css. (Not materialUI stuff). This seems to be
        way to go. Notes:
        <Box>
          1. Easier to work with (dont have to read custom mui docs for
          everything)
        </Box>
        <Box>
          2. Keeps components cleaner (components are for data, css is for
          styling)
        </Box>
        <Box>
          3. In some simple cases, such as setting margin or flex or something,
          direct styling the mui-way is more convenient
        </Box>
        <Box>
          4. This is just my own experience so far. Essentially if simple
          styling; go the mui-way else regular css-way.
        </Box>
      </Box>
      <Box my={2}>
        environment variable: {VAR1} (use .env.development and .env.production)
      </Box>

      <Box display="flex" mt={2}>
        <Box mx={3}>
          <Link to="/about">Internal Link</Link>
        </Box>
        <Box mx={3}>
          <Link to="https://material-ui.com/">External link</Link>
        </Box>
        <Box mx={3}>
          <Link to="/generatedpage1">generatedpage1</Link>/
          <Link to="/generatedpage2">generatedpage2</Link>
        </Box>
      </Box>
      <Box mb={3}>
        (use gatsby-node.js to generate pages based on a template)
      </Box>

      <Box my={3}>
        using gatsby imagesharp fluid together with flex
        <Box maxHeight={250} display="flex" justifyContent="space-evenly">
          <Img fluid={images.react_logo} />
          <Img fluid={images.gatsby_logo} />
          <Img fluid={images.materialui_logo} />
        </Box>
      </Box>
    </Typography>
  );
}

export default withState(Stuff);
