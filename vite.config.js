import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

const src = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'build');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
    plugins: [vue()],
    resolve: {
        alias: {'@': src, '@test': test}
    },
    build: {
        lib: {
            entry: `${src}/index.ts`,
            name: 'LktTable',
            fileName: 'build',
            formats: ['es']
        },
        outDir,
        minify: true,
        rollupOptions: {
            external: [
                'vue',
                'sortable',
                'vuedraggable',
                'lkt-http-client',
                'lkt-string-tools',
                'lkt-events',
                'lkt-loader',
                'lkt-field-text',
                'lkt-field-select',
                'lkt-field-switch',
                'lkt-field-check',
                'lkt-ts-interfaces',
                'lkt-data-state'
            ],
            output: {
                globals: {
                    vue: 'Vue',
                    vuedraggable: 'draggable',
                    "lkt-string-tools": 'LktStringTools',
                    "lkt-ts-interfaces": 'LktTsInterfaces',
                    "lkt-events": 'LktEvents'
                },
                sourcemapExcludeSources: true
            }
        }
    },
    test: {
        coverage: {
            reporter: ['text', 'lcov']
        },
        resolveSnapshotPath: (testPath, snapExtension) => {
            const path = testPath.split('/').splice(-2);
            return `${snapshots}/${path[0]}/${path[1]}${snapExtension}`;
        }
    }
};