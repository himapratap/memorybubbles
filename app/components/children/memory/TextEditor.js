import React, {Component} from 'react';
import editor from '../../../../assets/css/editor.css'
import draftToHtml from 'draftjs-to-html';
import {convertToRaw} from 'draft-js';

import draftToMarkdown from 'draftjs-to-markdown';
import {Editor} from 'react-draft-wysiwyg';
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

import renderHTML from 'react-render-html';

class TextEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorContents:'',
            html :''
        };

    }

    onEditorStateChange(editorContent) {
console.log(editorContent);
        this.setState({editorContents : editorContent});
        // console.log('Editor current contents');
        // console.log(this.state.editorContents.getCurrentContent());
        // console.log('Editor contents plain text');
        // console.log(this.state.editorContents.getCurrentContent().getPlainText());
        //
        var html = draftToHtml(convertToRaw(this.state.editorContents.getCurrentContent()));
        console.log(html);
         //  console.log(html);
        this.setState({html :html})
        //
        this.props.onChangeText(html);
    };

    render() {
      //  const {editorContents} = this.state;
        var renderhtml = '';
        if(this.state.html != ''){
          this.renderhtml = renderHTML(this.state.html);

        }
        return (
            <div className="demo-root">
                <div className="demo-editorSection">
                  <Editor
                             wrapperClassName="demo-wrapper-wide"
                             editorClassName="demo-editor"
                             onEditorStateChange={this.onEditorStateChange.bind(this)}
                             toolbar={{
                               options: ['history', 'remove', 'image', 'emoji', 'embedded', 'link', 'colorPicker', 'textAlign', 'list', 'fontFamily', 'fontSize', 'blockType', 'inline'],
                               inline: { inDropdown: true },
                               list: { inDropdown: true },
                               textAlign: { inDropdown: true },
                               link: { inDropdown: true },
                               history: { inDropdown: true },
                               image: { uploadCallback: uploadImageCallBack }
                             }}/>
                    {/* <Editor wrapperClassName="demo-wrapper-wide"
                        editorClassName="demo-editor"
                        toolbarOnFocus
                        onEditorStateChange={this.onEditorStateChange.bind(this)}
                        toolbar={{
                              inline: {
                                  inDropdown: false
                              },
                              list: {
                                  inDropdown: true
                              },
                              textAlign: {
                                  inDropdown: true
                              },
                            link: {
                                  inDropdown: true
                              },
                              history: {
                                  inDropdown: true
                              },
                              image: {
                                   uploadCallback: uploadImageCallBack
                              }
                          }}
                          placeholder = "Start typing.."

                         /> */}
                </div>
                     <div dangerouslySetInnerHTML={{__html: this.state.html}}></div>
              {/*    <div style={{ whiteSpace: 'nowrap' }}> {renderHTML(this.state.html)}</div> */}
            </div>
        );
    }

}

export default TextEditor;
