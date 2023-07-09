/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from "express";
import cors from "cors";
import ytdl from "ytdl-core";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/convert", async (req, res) => {
  const { videoUrl } = req.body;
  try {
    const info = await ytdl.getInfo(videoUrl);
    const videoFormat = ytdl.chooseFormat(info.formats, { quality: "highest" });

    if (videoFormat) {
      res.json({ convertedUrl: videoFormat.url });
    } else {
      res.status(400).json({ message: "Failed to convert video." });
    }
  } catch (error) {
    console.error("Failed to convert video:", error);
    res.status(500).json({ message: "Failed to convert video." });
  }
});

const IP_ADDRESS = "192.168.143.196";
const PORT = 5000;
app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server berjalan di http://${IP_ADDRESS}:${PORT}`);
});
