import routes from "./routes";
import menus from "./menus";
import fields from "./fields";
import fieldRenderers from "./fieldRenderers";
import validators from "./validators";
import icons from "./icons";
import install from "./install";
import revisionContent from "./contentDetails/revisionContent";
import header from "./contentDetails/header";
import contentForm from "./contentDetails/contentForm";
import footer from "./contentDetails/footer";
import contentRevisions from "./contentDetails/contentRevisions";
import contentModelEditorPlugins from "./../editor/plugins";
import appTemplateRenderer from "./appTemplatePlugins";

export default () => [
    install,
    routes,
    menus,
    icons,

    header,
    revisionContent,
    contentForm,
    footer,
    contentRevisions,

    // Editor
    fields,
    fieldRenderers,
    validators,
    contentModelEditorPlugins,
    appTemplateRenderer
];
