import React, { useState, useEffect } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/agate.css";

import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

const UseEffect: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    lastName: "",
    firstName: "",
  });
  useEffect(() => {
    document.title = count + "回クリックされました";
  }, [count]);

  const testUseEffect = () => {
    return (
      <div>
        <p>{count}回クリックされました</p>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => setCount((prev) => prev + 1)}>ボタン</Button>
          <Button onClick={() => setCount(0)}>リセット</Button>
        </ButtonGroup>
        <p>{"私の名前は" + name.lastName + name.firstName + "です"}</p>
        <form className={classes.root} noValidate autoComplete="off">
          <Input
            placeholder="姓"
            value={name.lastName}
            onChange={(e) => {
              setName({ ...name, lastName: e.target.value });
            }}
          />
          <Input
            placeholder="名"
            value={name.firstName}
            onChange={(e) => {
              setName({ ...name, firstName: e.target.value });
            }}
          />
        </form>
      </div>
    );
  };

  return (
    <>
      <div>
        <h3>UseEffect</h3>
        <p>
          副作用関数を初回レンダリング時の一度だけ実行させたい場合、第2引数に空の依存配列[]を指定する。
        </p>
        <p>
          useEffect（）の第２引数に[count]を渡すと、countに変化があったときだけ副作用関数を実行する
        </p>
        <Highlight className="js">{`  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    lastName: "",
    firstName: "",
  });
  useEffect(() => {
    document.title = count + "回クリックされました";
  }, [count]);

  const testUseEffect = () => {
    return (
      <div>
        <p>{count}回クリックされました</p>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => setCount((prev) => prev + 1)}>ボタン</Button>
          <Button onClick={() => setCount(0)}>リセット</Button>
        </ButtonGroup>
        <p>{"私の名前は" + name.lastName + name.firstName + "です"}</p>
        <form className={classes.root} noValidate autoComplete="off">
          <Input
            placeholder="姓"
            value={name.lastName}
            onChange={(e) => {
              setName({ ...name, lastName: e.target.value });
            }}
          />
          <Input
            placeholder="名"
            value={name.firstName}
            onChange={(e) => {
              setName({ ...name, firstName: e.target.value });
            }}
          />
        </form>
      </div>
    );
  };
`}</Highlight>
        {testUseEffect()}
      </div>
    </>
  );
};

export default UseEffect;
