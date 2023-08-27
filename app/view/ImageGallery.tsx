import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import { Modal } from "@mui/joy";
import { useState } from "react";
import { Dialog } from "@mui/material";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  const [img, setImg] = useState("");

  return (
    <div>
      <Masonry columns={3} spacing={0}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              onClick={(event) => open(item)}
              className={"hover:blur-0 blur-[1px]"}
              src={`/img/pwgallery/${item}?w=162&auto=format`}
              srcSet={`/img/pwgallery/${item}?w=162&auto=format&dpr=2 2x`}
              alt={""}
              loading="lazy"
              style={{
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
      <Open />
    </div>
  );

  function open(img: string) {
    setImg(img);
  }

  function Open() {
    return (
      <Dialog onClose={(event) => setImg("")} open={img.length !== 0}>
        <img
          className={"mx-auto"}
          src={`/img/pwgallery/${img}?w=162&auto=format`}
          srcSet={`/img/pwgallery/${img}?w=162&auto=format&dpr=2 2x`}
          alt={""}
          loading="lazy"
        />
      </Dialog>
    );
  }
}

const itemData = [
  "0f32c2c3-6a27-463c-80e8-22d4f9141e11.jpeg",
  "1e64c9b4-0d4b-45d2-a946-e8cafc94fc0d.jpeg",
  "2dacf186-7477-4936-8e73-8cd308f2d488.jpeg",
  "6a96c4cb-c917-47f0-a6cb-695b023224c3.jpeg",
  "7bd6b966-1703-4ae2-a83b-f556ecc76978.jpeg",
  "8f96f697-7798-448c-b851-abda12a68ae1.jpeg",
  "23d06c3f-0a08-4b4d-8202-341f28bb51e5.jpeg",
  "28f17ebb-acb3-4d2c-8c69-6933c3a4c4c1.jpeg",
  "33d28bc9-ed79-4b11-9d35-dd2b1ef7aa60.jpeg",
  "72fc04f0-c3d4-4cc8-b793-dd770740b48a.jpeg",
  "81bdac90-83a9-4311-ad53-5ea782cdc2ea.jpeg",
  "82cfe29b-42d8-44d6-a241-0cf76155464a.jpeg",
  "95bce485-07e2-48a7-ade8-b281d316cb22.jpeg",
  "123f46a1-26e5-496f-b039-4e694b5eab1f.jpeg",
  "525efd67-80eb-4d39-819f-d2677f41c63b.jpeg",
  "45439ff9-ac92-47c3-8adb-90908d3ffcf0.jpeg",
  "01061546-d3da-4edb-a2af-5d52a8139d1a.jpeg",
  "42204421-0fa5-417e-97f8-596e185d8c89.jpeg",
  "47859894-212d-4e37-ad88-b9528297ad59.jpeg",
  "ad0d9f0c-c737-489f-bf5e-9a3202ad452d.jpeg",
  "ba6d1f3d-dd05-48bf-8301-7cf2e3e2debb.jpeg",
  "bbf984d0-9e9e-4c30-8096-ed538bc668df.jpeg",
  "c58f2826-0418-4656-8969-5eee62f00550.jpeg",
  "d7383e74-1ba4-4abb-84c7-c6cc082b11b4.jpeg",
  "df4f07e3-9f5b-4fcb-b444-4cc2649a1f7f.jpeg",
  "e9257c5e-33fe-4a61-9917-b795892ed804.jpeg",
  "eae8290a-9bf0-4788-a272-c833ab585afa.jpeg",
  "ecbdcc44-beca-469e-9b69-ec8e3637b1a3.jpeg",
  "f3c7f66f-7146-495e-a265-f3e89f4ddfdd.jpeg",
  "fab36f38-cc3b-43e5-a370-59afba19ff3a.jpeg",
];
