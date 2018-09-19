set nocompatible 
set termencoding=utf8 
set encoding=utf8
set term=xterm 
set t_Co=256

syntax enable
set autoindent
set number
set relativenumber
set tabstop=2
set shiftwidth=2
set expandtab
set hidden
set wildmenu
" auto-save buffers when switching
" if current buffer is a new file, error will be shown in status bar
set autowrite
set autoread
set mouse=a
set ignorecase
" useful when using Upper case letter while searching with /
" set ignorecase is necessary for this
set smartcase
set splitbelow
set splitright
set synmaxcol=120
set timeout timeoutlen=2000
"for vim-hug-neovim-rpc
set pyxversion=0
colorscheme corporation_modified
"colorscheme Black
" disable highlighting of matching parenthesis ()
let g:loaded_matchparen=1

" change cursor depending on vim mode
if has("autocmd")
  au VimEnter,InsertLeave * silent execute '!echo -ne "\e[2 q"' | redraw!
  au InsertEnter,InsertChange *
    \ if v:insertmode == 'i' | 
    \   silent execute '!echo -ne "\e[6 q"' | redraw! |
    \ elseif v:insertmode == 'r' |
    \   silent execute '!echo -ne "\e[4 q"' | redraw! |
    \ endif
  au VimLeave * silent execute '!echo -ne "\e[ q"' | redraw!
endif


" key mappings
source ~/.vim/vimrc.keymap


" plugins
source ~/.vim/vimrc.plugin

" avoid seeing insert below the airline
set noshowmode
" see typed keys in vim status bar
set showcmd

" get past ), } etc...will work with any letter actually
"inoremap <C-e> <C-o>A
" alternative which can allow using tab key without disturbing other uses of
" tab key
inoremap <expr> > search('\%#[]>)}]', 'n') ? '<Right>' : '<Tab>'
