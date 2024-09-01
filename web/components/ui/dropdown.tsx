import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from "react";

import {cn} from "~/lib/utils"

import './dropdown.css'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownTrigger = DropdownMenuPrimitive.Trigger
const DropdownPortal = DropdownMenuPrimitive.Portal
const DropdownSeperator = DropdownMenuPrimitive.Separator

const DropdownContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({className, children, ...props}, ref) => (
    <DropdownPortal>
        <DropdownMenuPrimitive.Content
            ref={ref}
            className={cn(
                "DropdownMenuContent",
                className
            )}
            {...props}
        >
            {children}
        </DropdownMenuPrimitive.Content>
    </DropdownPortal>
))
DropdownContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownSub = DropdownMenuPrimitive.Sub;
const DropdownSubTrigger = DropdownMenuPrimitive.SubTrigger

const DropdownSubContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({className, children, ...props}, ref) => (
    <DropdownPortal>
        <DropdownMenuPrimitive.SubContent
            ref={ref}
            className={cn(
                "DropdownMenuSubContent",
                className
            )}
            {...props}
        >
            {children}
        </DropdownMenuPrimitive.SubContent>
    </DropdownPortal>
))
DropdownSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({className, children, ...props}, ref) => (
    <DropdownMenuPrimitive.Item ref={ref} className={cn("DropdownMenuItem", className)} {...props}>
        {children}
    </DropdownMenuPrimitive.Item>
))