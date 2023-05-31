/** @format */

import asyncRouter from 'async-express-decorator';
import cors from 'cors';
import express from 'express';
import multer from 'multer';
import { staticPath, tempPath, BASE_PATH } from './constants.js';
import './deps-install.js';
import { publishMFE, sendIndex, unPublishMFE } from './endpoints.js';
import { generateMfesReferences } from './mfes-references.js';
import { updateIndexHTML } from './html-template.js';
import { createOrUpdateImportmap } from './importmap.js';
import { createOrUpdateMfes } from './mfes.js';
import { rmTempContent } from './static.js';

rmTempContent();
createOrUpdateImportmap();
createOrUpdateMfes();
await updateIndexHTML();
await generateMfesReferences();

const upload = multer({ dest: tempPath, preservePath: true });
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = asyncRouter(express.Router());

app.use(BASE_PATH, express.static(staticPath));
app.use(BASE_PATH, router);
router.get(BASE_PATH, sendIndex);
router.post('/publish', upload.single('file'), publishMFE);
router.post('/unpublish', unPublishMFE);

app.get('*', sendIndex);

app.use((err, req, res, next) => {
	return res.status(400).send(`Error: ${err.message}`);
});

const port = process.env.PORT || 9001;

app.listen(port, () => {
	console.log(`Server running at port ${port}.`);
});
