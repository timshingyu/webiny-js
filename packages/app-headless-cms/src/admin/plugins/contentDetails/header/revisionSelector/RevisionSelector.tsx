import React from "react";
import { css } from "emotion";
import { withRouter } from "@webiny/react-router";
import { ButtonDefault } from "@webiny/ui/Button";
import { Icon } from "@webiny/ui/Icon";
import { ReactComponent as DownButton } from "@webiny/app-page-builder/admin/assets/round-arrow_drop_down-24px.svg";
import { MenuItem } from "@rmwc/menu";
import { Typography } from "@webiny/ui/Typography";
import { Menu } from "@webiny/ui/Menu";
import { get } from "lodash";
const buttonStyle = css({
    "&.mdc-button": {
        color: "var(--mdc-theme-text-primary-on-background) !important"
    }
});

const menuList = css({
    ".mdc-list-item": {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "baseline",
        textAlign: "left"
    }
});

const RevisionSelector = ({ location, history, content }) => {
    const query = new URLSearchParams(location.search);

    const currentRevision = {
        version: get(content, "meta.version", 1),
        status: get(content, "meta.status", "draft")
    };

    const allRevisions = get(content, "meta.revisions", [
        { id: "new", meta: { version: 1, status: "draft" } }
    ]);

    return (
        <Menu
            className={menuList}
            onSelect={evt => {
                query.set("id", content.revisions[evt.detail.index].id);
                history.push({ search: query.toString() });
            }}
            handle={
                <ButtonDefault className={buttonStyle}>
                    v{currentRevision.version} ({currentRevision.status}){" "}
                    <Icon icon={<DownButton />} />
                </ButtonDefault>
            }
        >
            {allRevisions.map(revision => (
                <MenuItem key={revision.id}>
                    <Typography use={"body2"}>v{revision.meta.version}</Typography>
                    <Typography use={"caption"}>({revision.meta.status})</Typography>
                </MenuItem>
            ))}
        </Menu>
    );
};

export default withRouter(RevisionSelector);