import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{t as i}from"./Divider-CyxlzlSx.js";import{t as a}from"./Divider-keWi-KmE.js";import{r as o}from"./renderDropdownItems-CCauXBOd.js";import{t as s}from"./DropdownMenu-G_QcpJle.js";import{U as c}from"./iframe-BHV5XRev.js";import{At as l,Bt as u,I as d,Mn as f,Mt as p,O as m,Pn as h,m as g,o as _,t as v,vt as y,wt as b}from"./esm-DA7gAIBC.js";import{i as x,n as S,o as C,t as w}from"./src-DDH_-d1n.js";var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;e((()=>{T=t(n()),c(),w(),a(),v(),E=r(),D={title:`Core/DropdownMenu`,component:s,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{button:{description:`Props for customizing the trigger button`},items:{description:`Menu items (items, dividers, or sections)`},isMenuOpen:{control:`boolean`,description:`Controlled open state`},menuWidth:{control:`text`,description:`Custom menu width (number for px or CSS string)`},placement:{control:`select`,options:[`above`,`below`,`start`,`end`],description:`Menu placement relative to trigger`},"data-testid":{control:`text`,description:`Test ID for testing frameworks`}}},O={render:()=>(0,E.jsx)(s,{button:{label:`Actions`},items:[{label:`Edit`,onClick:()=>console.log(`Edit clicked`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate clicked`)},{label:`Delete`,onClick:()=>console.log(`Delete clicked`)}]})},k={render:()=>(0,E.jsx)(s,{button:{label:`Actions`,variant:`primary`},items:[{label:`Edit`,icon:d,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,icon:p,onClick:()=>console.log(`Duplicate`)},{label:`Download`,icon:f,onClick:()=>console.log(`Download`)},{label:`Delete`,icon:g,onClick:()=>console.log(`Delete`)}]})},A={render:()=>(0,E.jsx)(s,{button:{label:`File`,variant:`ghost`},items:[{type:`section`,title:`Create`,items:[{label:`New File`,icon:l,onClick:()=>console.log(`New File`)},{label:`New Folder`,icon:y,onClick:()=>console.log(`New Folder`)}]},{type:`section`,title:`Share`,items:[{label:`Share`,icon:m,onClick:()=>console.log(`Share`)},{label:`Archive`,icon:h,onClick:()=>console.log(`Archive`)}]}]})},j={render:()=>(0,E.jsx)(s,{button:{label:`Actions`},items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{type:`divider`},{label:`Delete`,onClick:()=>console.log(`Delete`)}]})},M={render:()=>(0,E.jsx)(s,{button:{label:`Actions`},items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{label:`Delete (disabled)`,isDisabled:!0}]})},N={render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`center`},children:[(0,E.jsxs)(`div`,{children:[`Menu is `,e?`open`:`closed`]}),(0,E.jsx)(s,{button:{label:`Controlled Menu`},isMenuOpen:e,onOpenChange:t,items:[{label:`Item 1`,onClick:()=>console.log(`Item 1`)},{label:`Item 2`,onClick:()=>console.log(`Item 2`)},{label:`Item 3`,onClick:()=>console.log(`Item 3`)}]})]})}},P={render:()=>(0,E.jsx)(s,{button:{label:`Wide Menu`},menuWidth:300,items:[{label:`This is a longer option that needs more space`,onClick:()=>console.log(`Option 1`)},{label:`Another long option with extra text`,onClick:()=>console.log(`Option 2`)},{label:`Short one`,onClick:()=>console.log(`Option 3`)}]})},F={render:()=>(0,E.jsxs)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`},children:[(0,E.jsx)(s,{button:{label:`Secondary`,variant:`secondary`},items:[{label:`Option 1`},{label:`Option 2`}]}),(0,E.jsx)(s,{button:{label:`Primary`,variant:`primary`},items:[{label:`Option 1`},{label:`Option 2`}]}),(0,E.jsx)(s,{button:{label:`Ghost`,variant:`ghost`},items:[{label:`Option 1`},{label:`Option 2`}]}),(0,E.jsx)(s,{button:{label:`Destructive`,variant:`destructive`},items:[{label:`Option 1`},{label:`Option 2`}]})]})},I={render:()=>(0,E.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,E.jsx)(s,{button:{label:`Small`,size:`sm`},items:[{label:`Option 1`},{label:`Option 2`}]}),(0,E.jsx)(s,{button:{label:`Medium`,size:`md`},items:[{label:`Option 1`},{label:`Option 2`}]}),(0,E.jsx)(s,{button:{label:`Large`,size:`lg`},items:[{label:`Option 1`},{label:`Option 2`}]})]})},L={render:()=>{let[e,t]=(0,T.useState)(0);return(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`center`},children:[(0,E.jsxs)(`div`,{children:[`Button clicked `,e,` times`]}),(0,E.jsx)(s,{button:{label:`Click Me`},onClick:()=>t(e=>e+1),items:[{label:`Menu Item`,onClick:()=>console.log(`Item clicked`)}]})]})}},R={render:()=>(0,E.jsxs)(s,{button:{label:`Select User`},menuWidth:280,children:[(0,E.jsx)(o,{icon:_,label:`Alice Johnson`,description:`alice.johnson@example.com`,onClick:()=>console.log(`Alice`)}),(0,E.jsx)(o,{icon:_,label:`Bob Smith`,description:`bob.smith@example.com`,onClick:()=>console.log(`Bob`)}),(0,E.jsx)(o,{icon:_,label:`Carol Williams`,description:`carol.williams@example.com`,onClick:()=>console.log(`Carol`)})]})},z={render:()=>(0,E.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,E.jsx)(s,{button:{label:`More options`,icon:(0,E.jsx)(b,{}),variant:`ghost`,isIconOnly:!0},items:[{label:`Edit`,icon:d,onClick:()=>console.log(`Edit`)},{label:`Delete`,icon:g,onClick:()=>console.log(`Delete`)}]}),(0,E.jsx)(s,{button:{label:`Settings`,icon:(0,E.jsx)(u,{}),variant:`secondary`,isIconOnly:!0},items:[{label:`Preferences`,onClick:()=>console.log(`Preferences`)},{label:`Account`,onClick:()=>console.log(`Account`)}]})]})},B={render:()=>(0,E.jsx)(s,{button:{label:`Settings`,icon:(0,E.jsx)(u,{}),variant:`ghost`,children:`Settings`},items:[{label:`Preferences`,onClick:()=>console.log(`Preferences`)},{label:`Account`,onClick:()=>console.log(`Account`)}]})},V={render:()=>(0,E.jsx)(s,{button:{label:`Sort by: Name`,variant:`ghost`},hasChevron:!1,items:[{label:`Name`,onClick:()=>console.log(`Name`)},{label:`Date`,onClick:()=>console.log(`Date`)},{label:`Size`,onClick:()=>console.log(`Size`)}]})},H={render:()=>(0,E.jsxs)(s,{button:{label:`Actions`},children:[(0,E.jsx)(o,{icon:d,label:`Edit`,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(o,{icon:p,label:`Duplicate`,onClick:()=>console.log(`Duplicate`)}),(0,E.jsx)(i,{}),(0,E.jsx)(o,{icon:g,label:`Delete`,onClick:()=>console.log(`Delete`)})]})},U={render:()=>(0,E.jsxs)(s,{button:{label:`File Actions`},children:[(0,E.jsx)(o,{icon:d,label:`Edit`,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(o,{icon:p,label:`Duplicate`,onClick:()=>console.log(`Duplicate`)}),(0,E.jsx)(i,{}),(0,E.jsx)(o,{icon:g,label:`Delete (no permission)`,isDisabled:!0})]})},W={render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`center`},children:[(0,E.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,E.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked)}),`Show delete option`]}),(0,E.jsxs)(s,{button:{label:`Actions`},children:[(0,E.jsx)(o,{icon:d,label:`Edit`,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(o,{icon:m,label:`Share`,onClick:()=>console.log(`Share`)}),e&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{}),(0,E.jsx)(o,{icon:g,label:`Delete`,onClick:()=>console.log(`Delete`)})]})]})]})}},G={render:()=>(0,E.jsxs)(s,{button:{label:`Select User`},menuWidth:280,children:[(0,E.jsx)(o,{icon:_,label:`Alice Johnson`,description:`alice.johnson@example.com`,onClick:()=>console.log(`Alice`)}),(0,E.jsx)(o,{icon:_,label:`Bob Smith`,description:`bob.smith@example.com`,onClick:()=>console.log(`Bob`)}),(0,E.jsx)(o,{icon:_,label:`Carol Williams`,description:`carol.williams@example.com`,onClick:()=>console.log(`Carol`)})]})},K={render:()=>(0,E.jsx)(s,{button:{label:`Bottom toolbar menu`},placement:`above`,items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{label:`Delete`,onClick:()=>console.log(`Delete`)}]})},q={render:()=>(0,E.jsxs)(`div`,{style:{direction:`rtl`,display:`flex`,gap:`16px`},children:[(0,E.jsx)(s,{button:{label:`CSS direction: rtl`},items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{label:`Delete`,onClick:()=>console.log(`Delete`)}]}),(0,E.jsx)(`div`,{dir:`ltr`,children:(0,E.jsx)(`div`,{dir:`rtl`,children:(0,E.jsx)(s,{button:{label:`dir="rtl" attribute`},items:[{label:`Edit`,onClick:()=>console.log(`Edit`)},{label:`Duplicate`,onClick:()=>console.log(`Duplicate`)},{label:`Delete`,onClick:()=>console.log(`Delete`)}]})})})]}),parameters:{docs:{description:{story:`In RTL contexts (CSS direction property or dir attribute) the menu right-edge-aligns to the trigger and grows toward the left — the logical mirror of the LTR default (#3389). Both direction mechanisms are shown; the popover inherits direction from the trigger subtree and the self-* position-area keywords mirror it in pure CSS.`}}}},J={render:function(){let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(!0);return(0,E.jsxs)(s,{button:{label:`View`},children:[(0,E.jsx)(C,{label:`Show archived`,isChecked:e,onCheckedChange:t}),(0,E.jsx)(C,{label:`Show drafts`,description:`Include unpublished items`,isChecked:n,onCheckedChange:r})]})},parameters:{docs:{description:{story:'Lab: DropdownMenuCheckboxItem — independent toggles (role="menuitemcheckbox"). The menu stays open on toggle by default so several can be flipped at once. Import from `@astryxdesign/lab`.'}}}},Y={render:function(){let[e,t]=(0,T.useState)(`newest`);return(0,E.jsx)(s,{button:{label:`Sort`},children:(0,E.jsxs)(x,{value:e,onChange:t,"aria-label":`Sort by`,children:[(0,E.jsx)(S,{value:`newest`,label:`Newest`}),(0,E.jsx)(S,{value:`oldest`,label:`Oldest`}),(0,E.jsx)(S,{value:`az`,label:`Alphabetical`,description:`A → Z`})]})})},parameters:{docs:{description:{story:'Lab: DropdownMenuRadioGroup + DropdownMenuRadioItem — single-select group (role="menuitemradio"). Selecting closes the menu by default. Import from `@astryxdesign/lab`.'}}}},X={render:function(){let[e,t]=(0,T.useState)(`a`),[n,r]=(0,T.useState)(`a`);return(0,E.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,E.jsx)(s,{button:{label:`Small menu`,size:`sm`},children:(0,E.jsxs)(x,{value:e,onChange:t,"aria-label":`Small`,children:[(0,E.jsx)(S,{value:`a`,label:`Option A`}),(0,E.jsx)(S,{value:`b`,label:`Option B`})]})}),(0,E.jsx)(s,{button:{label:`Large menu`,size:`lg`},children:(0,E.jsxs)(x,{value:n,onChange:r,"aria-label":`Large`,children:[(0,E.jsx)(S,{value:`a`,label:`Option A`}),(0,E.jsx)(S,{value:`b`,label:`Option B`})]})})]})},parameters:{docs:{description:{story:"Lab: the checkbox/radio control size is derived from the menu item size — a `sm` menu renders the small (18px) control, `md`/`lg` render the standard (22px) control. On coarse-pointer (touch) devices the control swaps to the inline-end of the row."}}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Actions'
  }} items={[{
    label: 'Edit',
    onClick: () => console.log('Edit clicked')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate clicked')
  }, {
    label: 'Delete',
    onClick: () => console.log('Delete clicked')
  }]} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Actions',
    variant: 'primary'
  }} items={[{
    label: 'Edit',
    icon: PencilIcon,
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    icon: DocumentDuplicateIcon,
    onClick: () => console.log('Duplicate')
  }, {
    label: 'Download',
    icon: ArrowDownTrayIcon,
    onClick: () => console.log('Download')
  }, {
    label: 'Delete',
    icon: TrashIcon,
    onClick: () => console.log('Delete')
  }]} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'File',
    variant: 'ghost'
  }} items={[{
    type: 'section',
    title: 'Create',
    items: [{
      label: 'New File',
      icon: DocumentPlusIcon,
      onClick: () => console.log('New File')
    }, {
      label: 'New Folder',
      icon: FolderPlusIcon,
      onClick: () => console.log('New Folder')
    }]
  }, {
    type: 'section',
    title: 'Share',
    items: [{
      label: 'Share',
      icon: ShareIcon,
      onClick: () => console.log('Share')
    }, {
      label: 'Archive',
      icon: ArchiveBoxIcon,
      onClick: () => console.log('Archive')
    }]
  }]} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Actions'
  }} items={[{
    label: 'Edit',
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate')
  }, {
    type: 'divider'
  }, {
    label: 'Delete',
    onClick: () => console.log('Delete')
  }]} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Actions'
  }} items={[{
    label: 'Edit',
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate')
  }, {
    label: 'Delete (disabled)',
    isDisabled: true
  }]} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }}>
        <div>Menu is {isOpen ? 'open' : 'closed'}</div>
        <DropdownMenu button={{
        label: 'Controlled Menu'
      }} isMenuOpen={isOpen} onOpenChange={setIsOpen} items={[{
        label: 'Item 1',
        onClick: () => console.log('Item 1')
      }, {
        label: 'Item 2',
        onClick: () => console.log('Item 2')
      }, {
        label: 'Item 3',
        onClick: () => console.log('Item 3')
      }]} />
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Wide Menu'
  }} menuWidth={300} items={[{
    label: 'This is a longer option that needs more space',
    onClick: () => console.log('Option 1')
  }, {
    label: 'Another long option with extra text',
    onClick: () => console.log('Option 2')
  }, {
    label: 'Short one',
    onClick: () => console.log('Option 3')
  }]} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      <DropdownMenu button={{
      label: 'Secondary',
      variant: 'secondary'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
      <DropdownMenu button={{
      label: 'Primary',
      variant: 'primary'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
      <DropdownMenu button={{
      label: 'Ghost',
      variant: 'ghost'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
      <DropdownMenu button={{
      label: 'Destructive',
      variant: 'destructive'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <DropdownMenu button={{
      label: 'Small',
      size: 'sm'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
      <DropdownMenu button={{
      label: 'Medium',
      size: 'md'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
      <DropdownMenu button={{
      label: 'Large',
      size: 'lg'
    }} items={[{
      label: 'Option 1'
    }, {
      label: 'Option 2'
    }]} />
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [clickCount, setClickCount] = useState(0);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }}>
        <div>Button clicked {clickCount} times</div>
        <DropdownMenu button={{
        label: 'Click Me'
      }} onClick={() => setClickCount(c => c + 1)} items={[{
        label: 'Menu Item',
        onClick: () => console.log('Item clicked')
      }]} />
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Select User'
  }} menuWidth={280}>
      <DropdownMenuItem icon={UserIcon} label="Alice Johnson" description="alice.johnson@example.com" onClick={() => console.log('Alice')} />
      <DropdownMenuItem icon={UserIcon} label="Bob Smith" description="bob.smith@example.com" onClick={() => console.log('Bob')} />
      <DropdownMenuItem icon={UserIcon} label="Carol Williams" description="carol.williams@example.com" onClick={() => console.log('Carol')} />
    </DropdownMenu>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <DropdownMenu button={{
      label: 'More options',
      icon: <EllipsisHorizontalIcon />,
      variant: 'ghost',
      isIconOnly: true
    }} items={[{
      label: 'Edit',
      icon: PencilIcon,
      onClick: () => console.log('Edit')
    }, {
      label: 'Delete',
      icon: TrashIcon,
      onClick: () => console.log('Delete')
    }]} />
      <DropdownMenu button={{
      label: 'Settings',
      icon: <Cog6ToothIcon />,
      variant: 'secondary',
      isIconOnly: true
    }} items={[{
      label: 'Preferences',
      onClick: () => console.log('Preferences')
    }, {
      label: 'Account',
      onClick: () => console.log('Account')
    }]} />
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Settings',
    icon: <Cog6ToothIcon />,
    variant: 'ghost',
    children: 'Settings'
  }} items={[{
    label: 'Preferences',
    onClick: () => console.log('Preferences')
  }, {
    label: 'Account',
    onClick: () => console.log('Account')
  }]} />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Sort by: Name',
    variant: 'ghost'
  }} hasChevron={false} items={[{
    label: 'Name',
    onClick: () => console.log('Name')
  }, {
    label: 'Date',
    onClick: () => console.log('Date')
  }, {
    label: 'Size',
    onClick: () => console.log('Size')
  }]} />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Actions'
  }}>
      <DropdownMenuItem icon={PencilIcon} label="Edit" onClick={() => console.log('Edit')} />
      <DropdownMenuItem icon={DocumentDuplicateIcon} label="Duplicate" onClick={() => console.log('Duplicate')} />
      <Divider />
      <DropdownMenuItem icon={TrashIcon} label="Delete" onClick={() => console.log('Delete')} />
    </DropdownMenu>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'File Actions'
  }}>
      <DropdownMenuItem icon={PencilIcon} label="Edit" onClick={() => console.log('Edit')} />
      <DropdownMenuItem icon={DocumentDuplicateIcon} label="Duplicate" onClick={() => console.log('Duplicate')} />
      <Divider />
      <DropdownMenuItem icon={TrashIcon} label="Delete (no permission)" isDisabled />
    </DropdownMenu>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [canDelete, setCanDelete] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }}>
        <label style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
          <input type="checkbox" checked={canDelete} onChange={e => setCanDelete(e.target.checked)} />
          Show delete option
        </label>
        <DropdownMenu button={{
        label: 'Actions'
      }}>
          <DropdownMenuItem icon={PencilIcon} label="Edit" onClick={() => console.log('Edit')} />
          <DropdownMenuItem icon={ShareIcon} label="Share" onClick={() => console.log('Share')} />
          {canDelete && <>
              <Divider />
              <DropdownMenuItem icon={TrashIcon} label="Delete" onClick={() => console.log('Delete')} />
            </>}
        </DropdownMenu>
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Select User'
  }} menuWidth={280}>
      <DropdownMenuItem icon={UserIcon} label="Alice Johnson" description="alice.johnson@example.com" onClick={() => console.log('Alice')} />
      <DropdownMenuItem icon={UserIcon} label="Bob Smith" description="bob.smith@example.com" onClick={() => console.log('Bob')} />
      <DropdownMenuItem icon={UserIcon} label="Carol Williams" description="carol.williams@example.com" onClick={() => console.log('Carol')} />
    </DropdownMenu>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu button={{
    label: 'Bottom toolbar menu'
  }} placement="above" items={[{
    label: 'Edit',
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate')
  }, {
    label: 'Delete',
    onClick: () => console.log('Delete')
  }]} />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    direction: 'rtl',
    display: 'flex',
    gap: '16px'
  }}>
      <DropdownMenu button={{
      label: 'CSS direction: rtl'
    }} items={[{
      label: 'Edit',
      onClick: () => console.log('Edit')
    }, {
      label: 'Duplicate',
      onClick: () => console.log('Duplicate')
    }, {
      label: 'Delete',
      onClick: () => console.log('Delete')
    }]} />
      <div dir="ltr">
        <div dir="rtl">
          <DropdownMenu button={{
          label: 'dir="rtl" attribute'
        }} items={[{
          label: 'Edit',
          onClick: () => console.log('Edit')
        }, {
          label: 'Duplicate',
          onClick: () => console.log('Duplicate')
        }, {
          label: 'Delete',
          onClick: () => console.log('Delete')
        }]} />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'In RTL contexts (CSS direction property or dir attribute) the menu right-edge-aligns to the trigger and grows toward the left — the logical mirror of the LTR default (#3389). Both direction mechanisms are shown; the popover inherits direction from the trigger subtree and the self-* position-area keywords mirror it in pure CSS.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function LabCheckboxItemsStory() {
    const [showArchived, setShowArchived] = useState(false);
    const [showDrafts, setShowDrafts] = useState(true);
    return <DropdownMenu button={{
      label: 'View'
    }}>
        <DropdownMenuCheckboxItem label="Show archived" isChecked={showArchived} onCheckedChange={setShowArchived} />
        <DropdownMenuCheckboxItem label="Show drafts" description="Include unpublished items" isChecked={showDrafts} onCheckedChange={setShowDrafts} />
      </DropdownMenu>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Lab: DropdownMenuCheckboxItem — independent toggles (role="menuitemcheckbox"). The menu stays open on toggle by default so several can be flipped at once. Import from \`@astryxdesign/lab\`.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function LabRadioGroupStory() {
    const [sort, setSort] = useState('newest');
    return <DropdownMenu button={{
      label: 'Sort'
    }}>
        <DropdownMenuRadioGroup value={sort} onChange={setSort} aria-label="Sort by">
          <DropdownMenuRadioItem value="newest" label="Newest" />
          <DropdownMenuRadioItem value="oldest" label="Oldest" />
          <DropdownMenuRadioItem value="az" label="Alphabetical" description="A → Z" />
        </DropdownMenuRadioGroup>
      </DropdownMenu>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Lab: DropdownMenuRadioGroup + DropdownMenuRadioItem — single-select group (role="menuitemradio"). Selecting closes the menu by default. Import from \`@astryxdesign/lab\`.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function LabSelectableSizesStory() {
    const [sm, setSm] = useState('a');
    const [lg, setLg] = useState('a');
    return <div style={{
      display: 'flex',
      gap: 24
    }}>
        <DropdownMenu button={{
        label: 'Small menu',
        size: 'sm'
      }}>
          <DropdownMenuRadioGroup value={sm} onChange={setSm} aria-label="Small">
            <DropdownMenuRadioItem value="a" label="Option A" />
            <DropdownMenuRadioItem value="b" label="Option B" />
          </DropdownMenuRadioGroup>
        </DropdownMenu>
        <DropdownMenu button={{
        label: 'Large menu',
        size: 'lg'
      }}>
          <DropdownMenuRadioGroup value={lg} onChange={setLg} aria-label="Large">
            <DropdownMenuRadioItem value="a" label="Option A" />
            <DropdownMenuRadioItem value="b" label="Option B" />
          </DropdownMenuRadioGroup>
        </DropdownMenu>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Lab: the checkbox/radio control size is derived from the menu item size — a \`sm\` menu renders the small (18px) control, \`md\`/\`lg\` render the standard (22px) control. On coarse-pointer (touch) devices the control swaps to the inline-end of the row.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z=[`Default`,`WithIcons`,`WithSections`,`WithDividers`,`WithDisabledItems`,`Controlled`,`CustomWidth`,`ButtonVariants`,`ButtonSizes`,`WithOnClick`,`CustomItemRender`,`IconOnly`,`IconWithLabel`,`NoChevron`,`CompoundBasic`,`CompoundWithDisabled`,`CompoundConditional`,`CompoundWithDescriptions`,`PlacementAbove`,`RTL`,`LabCheckboxItems`,`LabRadioGroup`,`LabSelectableSizes`]}))();export{I as ButtonSizes,F as ButtonVariants,H as CompoundBasic,W as CompoundConditional,G as CompoundWithDescriptions,U as CompoundWithDisabled,N as Controlled,R as CustomItemRender,P as CustomWidth,O as Default,z as IconOnly,B as IconWithLabel,J as LabCheckboxItems,Y as LabRadioGroup,X as LabSelectableSizes,V as NoChevron,K as PlacementAbove,q as RTL,M as WithDisabledItems,j as WithDividers,k as WithIcons,L as WithOnClick,A as WithSections,Z as __namedExportsOrder,D as default};