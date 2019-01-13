" show $ sign after whitespace
set list
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
" jump to matching bracket with %
set showmatch
set timeout timeoutlen=2000
"for vim-hug-neovim-rpc
set pyxversion=0
"colorscheme corporation_modified
"colorscheme Black
" disable highlighting of matching parenthesis ()
let g:loaded_matchparen=1
" Ignore some folders and files for CtrlP indexing
let g:ctrlp_custom_ignore = {
  \ 'dir':  '\.git$\|\.yardoc\|node_modules\|log\|tmp$',
  \ 'file': '\.so$\|\.dat$|\.DS_Store$'
  \ }
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

"swap words separted by commas

nnoremap <silent> gl "_yiw:s/\(\%#\w\+\)\(\_W\+\)\(\w\+\)/\3\2\1/<CR><c-o>/\w\+\_W\+<CR><c-l>
nnoremap <silent> gh "_yiw?\w\+\_W\+\%#<CR>:s/\(\%#\w\+\)\(\_W\+\)\(\w\+\)/\3\2\1/<CR><c-o><c-l>
"pretteier start
" when running at every change you may want to disable quickfix
let g:prettier#quickfix_enabled = 0

let g:prettier#autoformat = 0
autocmd BufWritePre *.js,*.jsx,*.mjs,*.ts,*.tsx,*.css,*.less,*.scss,*.json,*.graphql,*.md,*.vue,*.yaml,*.html PrettierAsync
"pretteier end 
" this is if tpope commentary  is installed
"autocmd FileType javascript.jsx setlocal commentstring={/*\ %s\ */}

"NERDTree start
"autocmd VimEnter * NERDTree
"autocmd VimEnter * wincmd p
""NERDTree end
"autocmd VimEnter * NERDTree
"Remove all trailing whitespace by pressing F6
nnoremap <F6> :let _s=@/<Bar>:%s/\s\+$//e<Bar>:let @/=_s<Bar><CR>
" key mappings
source ~/.vim/vimrc.keymap

" js doc mapping
nmap <silent> <C-l> <Plug>(jsdoc)


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
inoremap <expr> > search('\%#[]>)}]', 'n') ? '<Right>' : '>'
colorscheme codedark
" supposed to disable comments continution, probably not working
autocmd BufNewFile,BufRead * setlocal formatoptions+=cqn
