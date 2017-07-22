import React, {Component} from 'react';
import editor  from '../../../../assets/css/editor.css'
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import { Editor } from 'react-draft-wysiwyg';
import uploadImageCallBack from '../../util/uploadImageCallBack';
import sampleEditorContent from '../../util/sampleEditorContent';
import bold from '../../../images/demo/bold.gif';
import italic from '../../../images/demo/italic.gif';
import underline from '../../../images/demo/underline.gif';
import strikethrough from '../../../images/demo/strikethrough.gif';
import subscript from '../../../images/demo/subscript.gif';
import superscript from '../../../images/demo/superscript.gif';
import eraser from '../../../images/demo/erase.gif';
import left from '../../../images/demo/left-align.gif';
import right from '../../../images/demo/right-align.gif';
import center from '../../../images/demo/center-align.gif';
import justify from '../../../images/demo/justify.gif';
import ordered from '../../../images/demo/ordered.gif';
import unordered from '../../../images/demo/unordered.gif';
import indent from '../../../images/demo/indent.gif';
import outdent from '../../../images/demo/outdent.gif';
import link from '../../../images/demo/link.gif';
import unlink from '../../../images/demo/unlink.gif';
import image from '../../../images/demo/image.gif';
import undo from '../../../images/demo/undo.gif';
import redo from '../../../images/demo/redo.gif';

class TextEditor extends Component {

    constructor() {
        super();
        this.state = {
            editorContents: []
        };
    }

    onEditorStateChange(index, editorContent) {
        let editorContents = this.state.editorContents;
        editorContents[index] = editorContent;
        editorContents = [...editorContents];
        this.setState({editorContents});
    };

    render() {
        const {editorContents} = this.state;

        return (
            <div className="demo-root">
              {/* <div className="demo-label">
                Editor with similar options grouped in drop-down.
              </div> */}
              <div className="demo-editorSection">
                <Editor
                  wrapperClassName="demo-wrapper-wide"
                  editorClassName="demo-editor"
                  toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: { uploadCallback: uploadImageCallBack }
                  }}
                />
              </div>
            </div>
        );
    }

}

export default TextEditor;
