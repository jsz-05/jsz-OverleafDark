const styleBlack = document.createElement('style');
const stylePurple = document.createElement('style');
const styleblue = document.createElement('style');


styleBlack.innerText = `
/* Purple Theme Styles (same as Black Theme for now) */
html, .loading-screen.ng-scope, .history-entries, .history-labels-list,
body, .navbar, footer, .popover, .tooltip, .pdf, .pdf-viewer,
.cm-panels-top, .toolbar-header, .ide-react-editor-sidebar, .history-react,
.toolbar .dropdown-menu, .modal-backdrop, .project-list-sidebar-wrapper-react,
.project-list-main-react .fa-circle, .synctex-controls, .custom-toggler,
.doc-container, .tag-dot, .color-picker-item, .loading, .history-version-list-container,
.chat {
    transition: background-color 0.3s ease, color 0.3s ease, filter 0.3s ease;
}

html, .loading-screen.ng-scope, .history-entries, .history-labels-list {
    background-color: black !important;
}

.pdf-viewer {
    background-color: #e4e8ed;
}

body,
${location.href.endsWith("overleaf.com/") || location.href.endsWith("overleaf.com") ? "" : ".navbar, .navbar .dropdown-menu,"}
footer,
.popover,
.tooltip,
.pdf,
.pdf-viewer,
.cm-panels-top,
.toolbar-header,
.ide-react-editor-sidebar,
.history-react,
.toolbar .dropdown-menu,
.modal-backdrop,
.project-list-sidebar-wrapper-react,
.project-list-main-react .fa-circle,
.synctex-controls,
.custom-toggler,
.doc-container,
.tag-dot,
.color-picker-item,
.loading,
.history-version-list-container,
.chat {
    filter: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg">\
      <filter id="replaceWhiteWithPurple" color-interpolation-filters="sRGB">\
        <feComponentTransfer>\
          <feFuncR type="table" tableValues="1 0.0"/>\
          <feFuncG type="table" tableValues="1 0.0"/>\
          <feFuncB type="table" tableValues="1 0"/>\
        </feComponentTransfer>\
      </filter>\
    </svg>#replaceWhiteWithPurple');
}

.cm-gutters {
    background-color: transparent !important;
}

.cm-panels-top {
    border-bottom: 1px solid #222 !important;
}

.project-list-main-react, .cm-activeLineGutter, .pdf-viewer {
    background-color: #f4f5f6 !important;
}

.horizontal-resize-handle {
    background-color: #fcfaf7;
}

.doc-container .loading {
    background-color: #000000;
    color: #ffffff;
}

.doc-container, .history-all-versions-container, .loading, #left-menu {
    background-color: #ffffff;
}

.cm-activeLine {
    background: rgba(0, 0, 0, 0.02) !important;
}

/* Specify the highlight color directly */
::.ͼe.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, 
.ͼe .cm-selectionBackground, .ͼe .cm-content ::selection, .ͼe .cm-searchMatch.cm-searchMatch.cm-searchMatch-selected {
    background-color: rgba(0, 180, 0, 0.5) !important; 
    color: #000000 !important; /* Ensuring text color is readable */
}

`;








styleblue.innerText = `
/* Purple Theme Styles (same as Black Theme for now) */
html, .loading-screen.ng-scope, .history-entries, .history-labels-list,
body, .navbar, footer, .popover, .tooltip, .pdf, .pdf-viewer,
.cm-panels-top, .toolbar-header, .ide-react-editor-sidebar, .history-react,
.toolbar .dropdown-menu, .modal-backdrop, .project-list-sidebar-wrapper-react,
.project-list-main-react .fa-circle, .synctex-controls, .custom-toggler,
.doc-container, .tag-dot, .color-picker-item, .loading, .history-version-list-container,
.chat {
    transition: background-color 0.3s ease, color 0.3s ease, filter 0.3s ease;
}

html, .loading-screen.ng-scope, .history-entries, .history-labels-list {
    background-color: black !important;
}

.pdf-viewer {
    background-color: #e4e8ed;
}

body,
${location.href.endsWith("overleaf.com/") || location.href.endsWith("overleaf.com") ? "" : ".navbar, .navbar .dropdown-menu,"}
footer,
.popover,
.tooltip,
.pdf,
.pdf-viewer,
.cm-panels-top,
.toolbar-header,
.ide-react-editor-sidebar,
.history-react,
.toolbar .dropdown-menu,
.modal-backdrop,
.project-list-sidebar-wrapper-react,
.project-list-main-react .fa-circle,
.synctex-controls,
.custom-toggler,
.doc-container,
.tag-dot,
.color-picker-item,
.loading,
.history-version-list-container,
.chat {
    filter: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg">\
      <filter id="replaceWhiteWithPurple" color-interpolation-filters="sRGB">\
        <feComponentTransfer>\
          <feFuncR type="table" tableValues="1 0.02"/>\
          <feFuncG type="table" tableValues="1 0.03"/>\
          <feFuncB type="table" tableValues="1 0.1"/>\
        </feComponentTransfer>\
      </filter>\
    </svg>#replaceWhiteWithPurple');
}

.cm-gutters {
    background-color: transparent !important;
}

.cm-panels-top {
    border-bottom: 1px solid #222 !important;
}

.project-list-main-react, .cm-activeLineGutter, .pdf-viewer {
    background-color: #f4f5f6 !important;
}

.horizontal-resize-handle {
    background-color: #fcfaf7;
}

.doc-container .loading {
    background-color: #000000;
    color: #ffffff;
}

.doc-container, .history-all-versions-container, .loading, #left-menu {
    background-color: #ffffff;
}

.cm-activeLine {
    background: rgba(0, 0, 0, 0.02) !important;
}

/* Specify the highlight color directly */
::.ͼe.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, 
.ͼe .cm-selectionBackground, .ͼe .cm-content ::selection, .ͼe .cm-searchMatch.cm-searchMatch.cm-searchMatch-selected {
    background-color: rgba(0, 180, 0, 0.5) !important; 
    color: #000000 !important; /* Ensuring text color is readable */
}

`;











stylePurple.innerText = `
/* Purple Theme Styles (same as Black Theme for now) */
html, .loading-screen.ng-scope, .history-entries, .history-labels-list,
body, .navbar, footer, .popover, .tooltip, .pdf, .pdf-viewer,
.cm-panels-top, .toolbar-header, .ide-react-editor-sidebar, .history-react,
.toolbar .dropdown-menu, .modal-backdrop, .project-list-sidebar-wrapper-react,
.project-list-main-react .fa-circle, .synctex-controls, .custom-toggler,
.doc-container, .tag-dot, .color-picker-item, .loading, .history-version-list-container,
.chat {
    transition: background-color 0.3s ease, color 0.3s ease, filter 0.3s ease;
}

html, .loading-screen.ng-scope, .history-entries, .history-labels-list {
    background-color: black !important;
}

.pdf-viewer {
    background-color: #e4e8ed;
}

body,
${location.href.endsWith("overleaf.com/") || location.href.endsWith("overleaf.com") ? "" : ".navbar, .navbar .dropdown-menu,"}
footer,
.popover,
.tooltip,
.pdf,
.pdf-viewer,
.cm-panels-top,
.toolbar-header,
.ide-react-editor-sidebar,
.history-react,
.toolbar .dropdown-menu,
.modal-backdrop,
.project-list-sidebar-wrapper-react,
.project-list-main-react .fa-circle,
.synctex-controls,
.custom-toggler,
.doc-container,
.tag-dot,
.color-picker-item,
.loading,
.history-version-list-container,
.chat {
    filter: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg">\
      <filter id="replaceWhiteWithPurple" color-interpolation-filters="sRGB">\
        <feComponentTransfer>\
          <feFuncR type="table" tableValues="1 0.08"/>\
          <feFuncG type="table" tableValues="1 0.0"/>\
          <feFuncB type="table" tableValues="1 0.1"/>\
        </feComponentTransfer>\
      </filter>\
    </svg>#replaceWhiteWithPurple');
}

.cm-gutters {
    background-color: transparent !important;
}

.cm-panels-top {
    border-bottom: 1px solid #222 !important;
}

.project-list-main-react, .cm-activeLineGutter, .pdf-viewer {
    background-color: #f4f5f6 !important;
}

.horizontal-resize-handle {
    background-color: #fcfaf7;
}

.doc-container .loading {
    background-color: #000000;
    color: #ffffff;
}

.doc-container, .history-all-versions-container, .loading, #left-menu {
    background-color: #ffffff;
}

.cm-activeLine {
    background: rgba(0, 0, 0, 0.02) !important;
}

/* Specify the highlight color directly */
::.ͼe.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, 
.ͼe .cm-selectionBackground, .ͼe .cm-content ::selection, .ͼe .cm-searchMatch.cm-searchMatch.cm-searchMatch-selected {
    background-color: rgba(0, 180, 0, 0.5) !important; 
    color: #000000 !important; /* Ensuring text color is readable */
}

`;


function applyTheme(theme) {
  if (theme === 'black') {
    document.body.appendChild(styleBlack);
    if (stylePurple.parentNode) {
      stylePurple.parentNode.removeChild(stylePurple);
    }
    if (styleblue.parentNode) {
      styleblue.parentNode.removeChild(styleblue);
    }
  } else if (theme === 'purple') {
    document.body.appendChild(stylePurple);
    if (styleBlack.parentNode) {
      styleBlack.parentNode.removeChild(styleBlack);
    }
    if (styleblue.parentNode) {
      styleblue.parentNode.removeChild(styleblue);
    }
  } else if (theme === 'blue') {
    document.body.appendChild(styleblue);
    if (styleBlack.parentNode) {
      styleBlack.parentNode.removeChild(styleBlack);
    }
    if (stylePurple.parentNode) {
      stylePurple.parentNode.removeChild(stylePurple);
    }
  } else {
    if (styleBlack.parentNode) {
      styleBlack.parentNode.removeChild(styleBlack);
    }
    if (stylePurple.parentNode) {
      stylePurple.parentNode.removeChild(stylePurple);
    }
    if (styleblue.parentNode) {
      styleblue.parentNode.removeChild(styleblue);
    }
  }
}

// Retrieve the 'theme' setting from Chrome storage
chrome.storage.sync.get(['theme'], function(result) {
  applyTheme(result.theme);
});

// Listen for changes in Chrome storage and update the style accordingly
chrome.storage.onChanged.addListener(() => {
  chrome.storage.sync.get(['theme'], function(result) {
    applyTheme(result.theme);
  });
});
