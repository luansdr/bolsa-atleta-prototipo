/* @ds-bundle: {"format":4,"namespace":"GOVBRDesignSystemDSGov_031ddd","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Loading","sourcePath":"components/core/Loading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Message","sourcePath":"components/feedback/Message.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Notification","sourcePath":"components/feedback/Notification.jsx"},{"name":"Scrim","sourcePath":"components/feedback/Scrim.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Upload","sourcePath":"components/forms/Upload.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"List","sourcePath":"components/layout/List.jsx"},{"name":"Item","sourcePath":"components/layout/List.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Step","sourcePath":"components/navigation/Step.jsx"},{"name":"Tab","sourcePath":"components/navigation/Tab.jsx"},{"name":"Accordion","sourcePath":"components/product/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/product/Avatar.jsx"},{"name":"Carousel","sourcePath":"components/product/Carousel.jsx"},{"name":"Cookiebar","sourcePath":"components/product/Cookiebar.jsx"},{"name":"Footer","sourcePath":"components/product/Footer.jsx"},{"name":"BrandMark","sourcePath":"components/product/Header.jsx"},{"name":"Header","sourcePath":"components/product/Header.jsx"},{"name":"SignIn","sourcePath":"components/product/SignIn.jsx"},{"name":"SignInHeader","sourcePath":"components/product/SignIn.jsx"},{"name":"Table","sourcePath":"components/product/Table.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"ed2a506dd010","components/core/Button.jsx":"8160e9e32e8e","components/core/Divider.jsx":"9c589d3d1f2d","components/core/Loading.jsx":"20dbab629402","components/core/Tag.jsx":"9b0f6896b36c","components/feedback/Message.jsx":"12641210ed2c","components/feedback/Modal.jsx":"95450612cf3e","components/feedback/Notification.jsx":"a803fb948c30","components/feedback/Scrim.jsx":"169974733493","components/feedback/Tooltip.jsx":"f7ce2cb840aa","components/forms/Checkbox.jsx":"65ffeb4c2b42","components/forms/DatePicker.jsx":"9a1cacd11d17","components/forms/Input.jsx":"0e69aa3711a3","components/forms/Radio.jsx":"858f6838ce3f","components/forms/Select.jsx":"7a5b342b1ae0","components/forms/Switch.jsx":"40d2a94dd560","components/forms/Textarea.jsx":"e5bb2a05b2b7","components/forms/Upload.jsx":"2702a3759345","components/layout/Card.jsx":"099d4d9147ed","components/layout/List.jsx":"9fc7f3083734","components/navigation/Breadcrumb.jsx":"b0226def92a5","components/navigation/Menu.jsx":"35b9fbc64fe7","components/navigation/Pagination.jsx":"82dee264f678","components/navigation/SideNav.jsx":"06f8e627d0d6","components/navigation/Step.jsx":"8f122bd4e9f3","components/navigation/Tab.jsx":"0f4c50d17d79","components/product/Accordion.jsx":"c5caa80320a6","components/product/Avatar.jsx":"48b077696f9f","components/product/Carousel.jsx":"8b75969bf372","components/product/Cookiebar.jsx":"16bd04bf8db5","components/product/Footer.jsx":"c98742f57fe7","components/product/Header.jsx":"553817c5877a","components/product/SignIn.jsx":"70f9aa7f433f","components/product/Table.jsx":"f7b3c76ca8f8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GOVBRDesignSystemDSGov_031ddd = window.GOVBRDesignSystemDSGov_031ddd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/** GOV.BR Badge (`.br-tag is-status` / notification count) — small overlay indicator. */
function Badge({
  children,
  status = "info",
  empty = false,
  style
}) {
  const colors = {
    info: "var(--info)",
    success: "var(--success)",
    warning: "var(--warning)",
    danger: "var(--danger)"
  };
  if (empty) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: colors[status],
        boxShadow: "0 0 0 2px var(--pure-0)",
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 18,
      height: 18,
      padding: "0 5px",
      borderRadius: "var(--surface-rounder-pill)",
      background: colors[status],
      color: status === "warning" ? "var(--text-strong)" : "var(--text-inverse)",
      fontSize: "var(--font-size-scale-down-02)",
      fontWeight: "var(--font-weight-bold)",
      lineHeight: 1,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GOV.BR Button (`.br-button`).
 * Pill-shaped by default; the signature gov.br control.
 * Variants: primary (solid azul), secondary (outline), default (ghost/text).
 */
function Button({
  children,
  variant = "default",
  size = "medium",
  block = false,
  circle = false,
  loading = false,
  disabled = false,
  inverted = false,
  icon,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const heights = {
    small: "var(--height-small)",
    medium: "var(--height-medium)",
    large: "var(--height-large)"
  };
  const pad = {
    small: "0 var(--spacing-scale-2x)",
    medium: "0 var(--spacing-scale-3x)",
    large: "0 var(--spacing-scale-4x)"
  };
  const h = heights[size];
  const palette = () => {
    if (variant === "primary") {
      return {
        background: inverted ? "var(--pure-0)" : "var(--interactive)",
        color: inverted ? "var(--interactive)" : "var(--text-inverse)",
        border: "none"
      };
    }
    if (variant === "secondary") {
      return {
        background: "transparent",
        color: inverted ? "var(--pure-0)" : "var(--interactive)",
        border: `var(--border-width-thick) solid ${inverted ? "var(--pure-0)" : "var(--interactive)"}`
      };
    }
    return {
      background: "transparent",
      color: inverted ? "var(--pure-0)" : "var(--interactive)",
      border: "none"
    };
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--spacing-scale-base)",
    height: h,
    width: circle ? h : block ? "100%" : "auto",
    minWidth: circle ? h : undefined,
    padding: circle ? 0 : pad[size],
    borderRadius: "var(--surface-rounder-pill)",
    fontFamily: "var(--font-family-base)",
    fontSize: size === "small" ? "var(--font-size-scale-down-01)" : "var(--font-size-scale-base)",
    fontWeight: "var(--font-weight-semi-bold)",
    lineHeight: 1,
    cursor: disabled || loading ? "not-allowed" : "pointer",
    opacity: disabled ? "var(--disabled-opacity)" : 1,
    transition: "background var(--duration) var(--easing-standard), box-shadow var(--duration) var(--easing-standard)",
    ...palette(),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    style: base
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "1em",
      height: "1em",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      borderRadius: "50%",
      animation: "govbr-spin 0.7s linear infinite"
    }
  }) : icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }), !circle && children, /*#__PURE__*/React.createElement("style", null, `@keyframes govbr-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/** GOV.BR Divider (`.br-divider`) — hairline rule, optional dashed / vertical. */
function Divider({
  vertical = false,
  dashed = false,
  label,
  style
}) {
  const line = `var(--border-width-hair) ${dashed ? "dashed" : "solid"} var(--border-color)`;
  if (vertical) {
    return /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: "inline-block",
        width: 0,
        alignSelf: "stretch",
        borderLeft: line,
        ...style
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-scale-2x)",
        color: "var(--text-secondary)",
        fontSize: "var(--font-size-scale-down-01)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        borderTop: line
      }
    }), label, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        borderTop: line
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: "none",
      borderTop: line,
      margin: "var(--spacing-scale-2x) 0",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Loading.jsx
try { (() => {
/** GOV.BR Loading (`.br-loading`) — indeterminate azul spinner. */
function Loading({
  size = "medium",
  label = "Carregando...",
  inline = false,
  style
}) {
  const dims = {
    small: 24,
    medium: 40,
    large: 56
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      display: inline ? "inline-flex" : "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--spacing-scale-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: dims,
      height: dims,
      border: `${Math.max(3, dims / 12)}px solid var(--blue-warm-10)`,
      borderTopColor: "var(--interactive)",
      borderRadius: "50%",
      animation: "govbr-load-spin 0.8s linear infinite"
    }
  }), label && !inline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("style", null, `@keyframes govbr-load-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Loading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Loading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** GOV.BR Tag (`.br-tag`) — compact status / metadata chip. */
function Tag({
  children,
  status,
  count = false,
  density = "medium",
  icon,
  onClose,
  style
}) {
  const statusColor = {
    success: "var(--success)",
    warning: "var(--warning)",
    danger: "var(--danger)",
    info: "var(--info)"
  };
  const isStatusDot = status && !children;
  const heights = {
    small: "20px",
    medium: "24px",
    large: "32px"
  };
  if (isStatusDot) {
    return /*#__PURE__*/React.createElement("span", {
      "aria-label": status,
      style: {
        display: "inline-block",
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: statusColor[status] || "var(--gray-40)",
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--spacing-scale-half)",
      height: heights[density],
      padding: count ? "0 var(--spacing-scale-base)" : "0 var(--spacing-scale-baseh)",
      borderRadius: "var(--surface-rounder-pill)",
      background: count ? "var(--interactive)" : "var(--gray-10)",
      color: count ? "var(--text-inverse)" : "var(--text-default)",
      fontSize: "var(--font-size-scale-down-01)",
      fontWeight: "var(--font-weight-medium)",
      lineHeight: 1,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }), children, onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Remover",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "inherit",
      padding: 0,
      marginLeft: 2,
      fontSize: "1em"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Message.jsx
try { (() => {
/** GOV.BR Message (`.br-message`) — inline feedback banner with left status bar. */
function Message({
  children,
  type = "info",
  title,
  onClose,
  style
}) {
  const cfg = {
    success: {
      color: "var(--success)",
      bg: "var(--success-bg)",
      icon: "fas fa-check-circle"
    },
    warning: {
      color: "var(--warning)",
      bg: "var(--warning-bg)",
      icon: "fas fa-exclamation-triangle"
    },
    danger: {
      color: "var(--danger)",
      bg: "var(--danger-bg)",
      icon: "fas fa-times-circle"
    },
    info: {
      color: "var(--info)",
      bg: "var(--info-bg)",
      icon: "fas fa-info-circle"
    }
  }[type];
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: "flex",
      gap: "var(--spacing-scale-2x)",
      padding: "var(--spacing-scale-2x)",
      background: cfg.bg,
      borderLeft: `var(--border-width-heavy) solid ${cfg.color}`,
      borderRadius: "var(--surface-rounder-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: cfg.icon,
    "aria-hidden": "true",
    style: {
      color: cfg.color,
      fontSize: "1.25em",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--font-weight-semi-bold)",
      color: "var(--text-strong)",
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--font-size-scale-base)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Message });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Message.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/** GOV.BR Modal (`.br-modal`) — centered dialog over a scrim. */
function Modal({
  children,
  title,
  open = true,
  footer,
  onClose,
  width = 480,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-overlay)",
      padding: "var(--spacing-scale-3x)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    style: {
      width,
      maxWidth: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      background: "var(--surface-card)",
      borderRadius: "var(--surface-rounder-md)",
      boxShadow: "var(--surface-shadow-lg)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--spacing-scale-2x)",
      padding: "var(--spacing-scale-3x)",
      borderBottom: "var(--border-width-hair) solid var(--border-color)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      flex: 1,
      margin: 0,
      fontSize: "var(--text-h4)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-secondary)",
      fontSize: "1.25em"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--spacing-scale-3x)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--spacing-scale-2x)",
      padding: "var(--spacing-scale-2x) var(--spacing-scale-3x)",
      borderTop: "var(--border-width-hair) solid var(--border-color)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notification.jsx
try { (() => {
/** GOV.BR Notification (`.br-notification`) — dropdown panel of alerts. */
function Notification({
  items = [],
  title = "Notificações",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      background: "var(--surface-card)",
      borderRadius: "var(--surface-rounder-md)",
      boxShadow: "var(--surface-shadow-lg)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--spacing-scale-2x)",
      borderBottom: "var(--border-width-hair) solid var(--border-color)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--interactive)",
      cursor: "pointer"
    }
  }, "Marcar lidas")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      maxHeight: 320,
      overflowY: "auto"
    }
  }, items.map((n, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--spacing-scale-2x)",
      padding: "var(--spacing-scale-2x)",
      borderBottom: "var(--border-width-hair) solid var(--border-color)",
      background: n.unread ? "var(--blue-warm-5)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: n.icon || "fas fa-bell",
    "aria-hidden": "true",
    style: {
      color: "var(--interactive)",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--font-size-scale-base)",
      color: "var(--text-strong)"
    }
  }, n.text), n.time && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--text-secondary)"
    }
  }, n.time))))));
}
Object.assign(__ds_scope, { Notification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Scrim.jsx
try { (() => {
/**
 * GOV.BR Scrim (`.br-scrim`) — full-surface dimming overlay.
 * Used behind modals/menus. `active` toggles visibility; children render centered.
 */
function Scrim({
  children,
  active = true,
  onClick,
  opacity = 0.5,
  style
}) {
  if (!active) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      position: "absolute",
      inset: 0,
      background: `rgba(var(--pure-100-rgb), ${opacity})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Scrim });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Scrim.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** GOV.BR Tooltip (`.br-tooltip`) — hover/focus popover. */
function Tooltip({
  children,
  text,
  place = "top",
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: 8
    },
    bottom: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: 8
    },
    left: {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginRight: 8
    },
    right: {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginLeft: 8
    }
  }[place];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 100,
      ...pos,
      whiteSpace: "nowrap",
      background: "var(--blue-warm-vivid-90)",
      color: "var(--text-inverse)",
      padding: "var(--spacing-scale-base) var(--spacing-scale-baseh)",
      borderRadius: "var(--surface-rounder-sm)",
      fontSize: "var(--font-size-scale-down-01)",
      boxShadow: "var(--surface-shadow-md)"
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** GOV.BR Checkbox (`.br-checkbox`) — square check with azul fill. */
function Checkbox({
  label,
  id,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  onChange,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const on = checked ?? defaultChecked;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--spacing-scale-base)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    id: id,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: "100%",
      height: "100%",
      margin: 0,
      cursor: "inherit"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      border: `var(--border-width-thick) solid ${on || indeterminate ? "var(--interactive)" : "var(--border-color-strong)"}`,
      background: on || indeterminate ? "var(--interactive)" : "var(--pure-0)",
      borderRadius: "var(--surface-rounder-sm)",
      color: "var(--text-inverse)",
      fontSize: 12
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("i", {
    className: "fas fa-minus"
  }) : on ? /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }) : null)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--font-size-scale-base)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** GOV.BR Input (`.br-input`) — labelled text field with optional icon + feedback. */
function Input({
  label,
  id,
  placeholder,
  value,
  defaultValue,
  type = "text",
  icon,
  feedback,
  feedbackText,
  disabled = false,
  highlight = false,
  onChange,
  style,
  ...rest
}) {
  const fb = {
    danger: "var(--danger)",
    success: "var(--success)",
    warning: "var(--warning)",
    info: "var(--info)"
  }[feedback];
  const fbIcon = {
    danger: "fas fa-times-circle",
    success: "fas fa-check-circle",
    warning: "fas fa-exclamation-triangle",
    info: "fas fa-info-circle"
  }[feedback];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing-scale-half)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-default)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-scale-base)",
      height: "var(--height-medium)",
      padding: "0 var(--spacing-scale-2x)",
      background: disabled ? "var(--gray-5)" : "var(--pure-0)",
      border: `var(--border-width-hair) solid ${fb || (highlight ? "var(--interactive)" : "var(--border-color-strong)")}`,
      borderRadius: "var(--surface-rounder-sm)",
      opacity: disabled ? "var(--disabled-opacity)" : 1
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true",
    style: {
      color: "var(--text-secondary)"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "inherit",
      color: "var(--text-strong)",
      minWidth: 0
    }
  }, rest))), feedback && feedbackText && /*#__PURE__*/React.createElement("span", {
    role: "alert",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--spacing-scale-half)",
      color: fb,
      fontSize: "var(--font-size-scale-down-01)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: fbIcon,
    "aria-hidden": "true"
  }), feedbackText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
/**
 * GOV.BR DatePicker (`.br-datetimepicker`) — text field with a calendar icon.
 * Simplified cosmetic recreation (masking/calendar popover omitted).
 */
function DatePicker({
  label = "Data",
  id,
  value,
  placeholder = "dd/mm/aaaa",
  disabled = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: label,
    id: id,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    icon: "fas fa-calendar-alt",
    onChange: onChange,
    style: style
  });
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** GOV.BR Radio (`.br-radio`) — circular single-select control. */
function Radio({
  label,
  id,
  name,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style
}) {
  const on = checked ?? defaultChecked;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--spacing-scale-base)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "radio",
    name: name,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: "100%",
      height: "100%",
      margin: 0,
      cursor: "inherit"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: `var(--border-width-thick) solid ${on ? "var(--interactive)" : "var(--border-color-strong)"}`,
      background: "var(--pure-0)"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--interactive)"
    }
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--font-size-scale-base)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** GOV.BR Select (`.br-select`) — combobox-style single/multi select. */
function Select({
  label,
  id,
  options = [],
  value,
  placeholder = "Selecione",
  multiple = false,
  disabled = false,
  onChange,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(multiple ? Array.isArray(value) ? value : [] : value ?? null);
  const display = multiple ? selected.length ? `${selected.length} selecionado(s)` : placeholder : selected != null ? options.find(o => (o.value ?? o) === selected)?.label ?? selected : placeholder;
  const pick = v => {
    let next;
    if (multiple) {
      next = selected.includes(v) ? selected.filter(x => x !== v) : [...selected, v];
    } else {
      next = v;
      setOpen(false);
    }
    setSelected(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing-scale-half)",
      position: "relative",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      fontWeight: "var(--font-weight-medium)"
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    id: id,
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "var(--height-medium)",
      padding: "0 var(--spacing-scale-2x)",
      background: disabled ? "var(--gray-5)" : "var(--pure-0)",
      border: "var(--border-width-hair) solid var(--border-color-strong)",
      borderRadius: "var(--surface-rounder-sm)",
      font: "inherit",
      color: (multiple ? selected.length : selected != null) ? "var(--text-strong)" : "var(--text-secondary)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", null, display), /*#__PURE__*/React.createElement("i", {
    className: `fas fa-angle-${open ? "up" : "down"}`,
    "aria-hidden": "true",
    style: {
      color: "var(--interactive)"
    }
  })), open && /*#__PURE__*/React.createElement("ul", {
    role: "listbox",
    style: {
      listStyle: "none",
      margin: 0,
      padding: "var(--spacing-scale-half)",
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      zIndex: 20,
      background: "var(--pure-0)",
      border: "var(--border-width-hair) solid var(--border-color)",
      borderRadius: "var(--surface-rounder-sm)",
      boxShadow: "var(--surface-shadow-md)",
      maxHeight: 220,
      overflowY: "auto",
      marginTop: 4
    }
  }, options.map(o => {
    const v = o.value ?? o;
    const l = o.label ?? o;
    const on = multiple ? selected.includes(v) : selected === v;
    return /*#__PURE__*/React.createElement("li", {
      key: v,
      role: "option",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-scale-base)",
        padding: "var(--spacing-scale-base) var(--spacing-scale-baseh)",
        borderRadius: "var(--surface-rounder-sm)",
        cursor: "pointer",
        background: on ? "var(--blue-warm-5)" : "transparent",
        fontSize: "var(--font-size-scale-base)"
      }
    }, multiple && /*#__PURE__*/React.createElement("i", {
      className: on ? "fas fa-check-square" : "far fa-square",
      style: {
        color: on ? "var(--interactive)" : "var(--gray-40)"
      },
      "aria-hidden": "true"
    }), l);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** GOV.BR Switch (`.br-switch`) — on/off toggle. */
function Switch({
  label,
  id,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style
}) {
  const [on, setOn] = React.useState(checked ?? defaultChecked ?? false);
  const isOn = checked ?? on;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--spacing-scale-base)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: e => {
      setOn(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      width: 44,
      height: 24,
      padding: 2,
      borderRadius: "var(--surface-rounder-pill)",
      background: isOn ? "var(--interactive)" : "var(--gray-30)",
      transition: "background var(--duration) var(--easing-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "var(--pure-0)",
      boxShadow: "var(--surface-shadow-sm)",
      transform: isOn ? "translateX(20px)" : "translateX(0)",
      transition: "transform var(--duration) var(--easing-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--font-size-scale-base)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
/** GOV.BR Textarea (`.br-textarea`) — multiline field with optional char counter. */
function Textarea({
  label,
  id,
  placeholder,
  value,
  defaultValue,
  rows = 4,
  maxLength,
  disabled = false,
  onChange,
  style
}) {
  const [len, setLen] = React.useState((value ?? defaultValue ?? "").length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing-scale-half)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-default)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    id: id,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    maxLength: maxLength,
    disabled: disabled,
    onChange: e => {
      setLen(e.target.value.length);
      onChange && onChange(e);
    },
    style: {
      resize: "vertical",
      padding: "var(--spacing-scale-baseh) var(--spacing-scale-2x)",
      background: disabled ? "var(--gray-5)" : "var(--pure-0)",
      border: "var(--border-width-hair) solid var(--border-color-strong)",
      borderRadius: "var(--surface-rounder-sm)",
      font: "inherit",
      color: "var(--text-strong)",
      lineHeight: "var(--line-height-medium)"
    }
  }), maxLength && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "flex-end",
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--text-secondary)"
    }
  }, "Restam ", /*#__PURE__*/React.createElement("strong", null, Math.max(0, maxLength - len)), " caracteres"));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Upload.jsx
try { (() => {
/** GOV.BR Upload (`.br-upload`) — drag-and-drop file input with list. */
function Upload({
  label = "Envie o arquivo",
  multiple = false,
  disabled = false,
  hint,
  style
}) {
  const [files, setFiles] = React.useState([]);
  const [drag, setDrag] = React.useState(false);
  const inputRef = React.useRef(null);
  const add = list => setFiles(f => multiple ? [...f, ...Array.from(list)] : Array.from(list).slice(0, 1));
  const size = b => b < 1024 ? `${b} B` : b < 1048576 ? `${(b / 1024).toFixed(1)} KB` : `${(b / 1048576).toFixed(1)} MB`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing-scale-base)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      fontWeight: "var(--font-weight-medium)"
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => inputRef.current?.click(),
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      add(e.dataTransfer.files);
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--spacing-scale-base)",
      height: "var(--height-large)",
      padding: "0 var(--spacing-scale-3x)",
      background: drag ? "var(--blue-warm-5)" : "var(--pure-0)",
      cursor: "pointer",
      border: `var(--border-width-thick) dashed ${drag ? "var(--interactive)" : "var(--border-color-strong)"}`,
      borderRadius: "var(--surface-rounder-sm)",
      color: "var(--interactive)",
      font: "inherit",
      fontWeight: "var(--font-weight-semi-bold)",
      opacity: disabled ? "var(--disabled-opacity)" : 1
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-upload",
    "aria-hidden": "true"
  }), "Selecione ", multiple ? "os arquivos" : "o arquivo"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    multiple: multiple,
    hidden: true,
    onChange: e => add(e.target.files)
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--text-secondary)"
    }
  }, hint), files.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-scale-base)",
      padding: "var(--spacing-scale-base) var(--spacing-scale-2x)",
      border: "var(--border-width-hair) solid var(--border-color)",
      borderRadius: "var(--surface-rounder-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--interactive)"
    }
  }, f.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--text-secondary)"
    }
  }, size(f.size)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFiles(x => x.filter((_, j) => j !== i)),
    "aria-label": "Remover",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-trash",
    "aria-hidden": "true"
  })))));
}
Object.assign(__ds_scope, { Upload });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Upload.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
/** GOV.BR Card (`.br-card`) — elevated surface container. */
function Card({
  children,
  header,
  footer,
  hover = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      borderRadius: "var(--surface-rounder-md)",
      boxShadow: "var(--surface-shadow-sm)",
      overflow: "hidden",
      transition: "box-shadow var(--duration) var(--easing-standard)",
      ...style
    },
    onMouseEnter: hover ? e => e.currentTarget.style.boxShadow = "var(--surface-shadow-lg)" : undefined,
    onMouseLeave: hover ? e => e.currentTarget.style.boxShadow = "var(--surface-shadow-sm)" : undefined
  }, header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--spacing-scale-3x) var(--spacing-scale-3x) 0"
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--spacing-scale-3x)",
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--spacing-scale-2x) var(--spacing-scale-3x)",
      borderTop: "var(--border-width-hair) solid var(--border-color)"
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/List.jsx
try { (() => {
/** GOV.BR List + Item (`.br-list` / `.br-item`) — vertical list of rows. */
function List({
  children,
  title,
  dividers = true,
  style
}) {
  const items = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("div", {
    role: "list",
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--surface-rounder-md)",
      overflow: "hidden",
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--spacing-scale-baseh) var(--spacing-scale-2x)",
      fontSize: "var(--font-size-scale-down-01)",
      fontWeight: "var(--font-weight-semi-bold)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-secondary)"
    }
  }, title), items.map((child, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: dividers && (title || i > 0) ? "var(--border-width-hair) solid var(--border-color)" : "none"
    }
  }, child)));
}

/** A single list row. */
function Item({
  children,
  icon,
  action,
  active = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "listitem",
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-scale-2x)",
      padding: "var(--spacing-scale-2x)",
      cursor: onClick ? "pointer" : "default",
      background: active ? "var(--blue-warm-5)" : "transparent",
      borderLeft: active ? "var(--border-width-heavy) solid var(--interactive)" : "var(--border-width-heavy) solid transparent",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true",
    style: {
      color: "var(--interactive)",
      width: 20,
      textAlign: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), action);
}
Object.assign(__ds_scope, { List, Item });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/List.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** GOV.BR Breadcrumb (`.br-breadcrumb`) — hierarchical trail. */
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumbs",
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "var(--spacing-scale-half)",
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontSize: "var(--font-size-scale-down-01)"
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-scale-half)"
      }
    }, i === 0 && /*#__PURE__*/React.createElement("i", {
      className: "fas fa-home",
      "aria-hidden": "true",
      style: {
        color: "var(--interactive)"
      }
    }), last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        color: "var(--text-secondary)",
        fontWeight: "var(--font-weight-medium)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      style: {
        color: "var(--interactive)",
        textDecoration: "none"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right",
      "aria-hidden": "true",
      style: {
        color: "var(--gray-40)",
        fontSize: "0.75em",
        margin: "0 4px"
      }
    }));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
/** GOV.BR Menu (`.br-menu`) — collapsible side navigation panel. */
function Menu({
  items = [],
  title,
  open = true,
  style
}) {
  const [expanded, setExpanded] = React.useState({});
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 280,
      background: "var(--surface-card)",
      boxShadow: "var(--surface-shadow-md)",
      display: open ? "block" : "none",
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-scale-base)",
      padding: "var(--spacing-scale-2x)",
      borderBottom: "var(--border-width-hair) solid var(--border-color)",
      fontWeight: "var(--font-weight-semi-bold)"
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: "var(--spacing-scale-base) 0"
    }
  }, items.map((it, i) => {
    const hasChildren = it.children && it.children.length;
    const isOpen = expanded[i];
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => hasChildren ? setExpanded(e => ({
        ...e,
        [i]: !e[i]
      })) : it.onClick && it.onClick(),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-scale-2x)",
        width: "100%",
        padding: "var(--spacing-scale-baseh) var(--spacing-scale-2x)",
        background: it.active ? "var(--blue-warm-5)" : "transparent",
        border: "none",
        borderLeft: `var(--border-width-heavy) solid ${it.active ? "var(--interactive)" : "transparent"}`,
        cursor: "pointer",
        font: "inherit",
        color: "var(--text-default)",
        textAlign: "left"
      }
    }, it.icon && /*#__PURE__*/React.createElement("i", {
      className: it.icon,
      "aria-hidden": "true",
      style: {
        width: 20,
        textAlign: "center",
        color: "var(--interactive)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), hasChildren && /*#__PURE__*/React.createElement("i", {
      className: `fas fa-angle-${isOpen ? "up" : "down"}`,
      "aria-hidden": "true",
      style: {
        color: "var(--text-secondary)"
      }
    })), hasChildren && isOpen && /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0
      }
    }, it.children.map((c, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, /*#__PURE__*/React.createElement("button", {
      onClick: c.onClick,
      style: {
        display: "block",
        width: "100%",
        textAlign: "left",
        padding: "var(--spacing-scale-base) var(--spacing-scale-2x) var(--spacing-scale-base) var(--spacing-scale-6x)",
        background: "none",
        border: "none",
        cursor: "pointer",
        font: "inherit",
        color: "var(--text-secondary)"
      }
    }, c.label)))));
  })));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/** GOV.BR Pagination (`.br-pagination`). */
function Pagination({
  total = 1,
  current = 1,
  onChange,
  style
}) {
  const [page, setPage] = React.useState(current);
  const go = p => {
    const n = Math.min(total, Math.max(1, p));
    setPage(n);
    onChange && onChange(n);
  };
  const pages = Array.from({
    length: total
  }, (_, i) => i + 1).filter(p => p === 1 || p === total || Math.abs(p - page) <= 1);
  const btn = (content, opts = {}) => /*#__PURE__*/React.createElement("button", {
    onClick: opts.onClick,
    disabled: opts.disabled,
    "aria-current": opts.active ? "page" : undefined,
    style: {
      minWidth: 36,
      height: 36,
      borderRadius: "var(--surface-rounder-pill)",
      border: "none",
      cursor: opts.disabled ? "not-allowed" : "pointer",
      background: opts.active ? "var(--interactive)" : "transparent",
      color: opts.active ? "var(--text-inverse)" : "var(--interactive)",
      font: "inherit",
      fontWeight: "var(--font-weight-medium)",
      opacity: opts.disabled ? "var(--disabled-opacity)" : 1
    }
  }, content);
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Pagina\xE7\xE3o",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-scale-half)",
      ...style
    }
  }, btn(/*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-left"
  }), {
    onClick: () => go(page - 1),
    disabled: page === 1
  }), pages.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p
  }, i > 0 && p - pages[i - 1] > 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)",
      padding: "0 4px"
    }
  }, "\u2026"), btn(p, {
    onClick: () => go(p),
    active: p === page
  }))), btn(/*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  }), {
    onClick: () => go(page + 1),
    disabled: page === total
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
/**
 * GOV.BR SideNav — persistent left navigation used across the Template V3
 * internal application screens (CRUD, Relatórios, etc.). Vertical list of
 * navigation items with optional icons, expandable groups, an active state
 * (blue left-accent + tinted background), and an optional product header.
 */
function SideNav({
  items = [],
  header,
  footer,
  activeId,
  onNavigate,
  style
}) {
  const [open, setOpen] = React.useState(() => {
    const o = {};
    items.forEach(it => {
      if (it.children && it.children.some(c => c.id === activeId)) o[it.id] = true;
    });
    return o;
  });
  const rowBase = {
    display: "flex",
    alignItems: "center",
    gap: "var(--spacing-scale-2x)",
    width: "100%",
    padding: "var(--spacing-scale-2x) var(--spacing-scale-3x)",
    background: "none",
    border: "none",
    borderLeft: "3px solid transparent",
    font: "inherit",
    fontSize: "var(--font-size-scale-up-01)",
    color: "var(--text-default)",
    cursor: "pointer",
    textAlign: "left",
    lineHeight: "1.4"
  };
  const activeRow = {
    borderLeftColor: "var(--interactive)",
    background: "var(--blue-warm-vivid-5)",
    color: "var(--interactive)",
    fontWeight: "var(--font-weight-semi-bold)"
  };
  const Row = ({
    it,
    child
  }) => {
    const isActive = it.id === activeId;
    const hasChildren = it.children && it.children.length > 0;
    return /*#__PURE__*/React.createElement("button", {
      style: {
        ...rowBase,
        ...(isActive ? activeRow : {}),
        paddingLeft: child ? "var(--spacing-scale-6x)" : rowBase.padding
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.background = "var(--gray-2)";
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.background = "none";
      },
      onClick: () => {
        if (hasChildren) setOpen(o => ({
          ...o,
          [it.id]: !o[it.id]
        }));else onNavigate && onNavigate(it.id);
      }
    }, it.icon && /*#__PURE__*/React.createElement("i", {
      className: it.icon,
      style: {
        width: 20,
        textAlign: "center",
        color: isActive ? "var(--interactive)" : "var(--gray-60)"
      },
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--font-size-scale-down-02)",
        fontWeight: "var(--font-weight-bold)",
        background: "var(--interactive)",
        color: "var(--pure-0)",
        borderRadius: "var(--surface-rounder-pill)",
        padding: "1px 8px"
      }
    }, it.badge), hasChildren && /*#__PURE__*/React.createElement("i", {
      className: open[it.id] ? "fas fa-angle-up" : "fas fa-angle-down",
      style: {
        color: "var(--gray-60)"
      },
      "aria-hidden": "true"
    }));
  };
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Navega\xE7\xE3o lateral",
    style: {
      width: 280,
      flexShrink: 0,
      background: "var(--pure-0)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRight: "var(--border-width-hair) solid var(--border-color)",
      boxShadow: "var(--surface-shadow-sm)",
      ...style
    }
  }, header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--spacing-scale-3x)",
      borderBottom: "var(--border-width-hair) solid var(--border-color)"
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "var(--spacing-scale-base) 0"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id
  }, /*#__PURE__*/React.createElement(Row, {
    it: it
  }), it.children && open[it.id] && it.children.map(c => /*#__PURE__*/React.createElement(Row, {
    key: c.id,
    it: c,
    child: true
  }))))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--spacing-scale-3x)",
      borderTop: "var(--border-width-hair) solid var(--border-color)",
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--text-secondary)"
    }
  }, footer));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Step.jsx
try { (() => {
/** GOV.BR Step (`.br-step`) — horizontal progress stepper. */
function Step({
  steps = [],
  current = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Etapas",
    style: {
      display: "flex",
      alignItems: "flex-start",
      ...style
    }
  }, steps.map((label, i) => {
    const done = i < current;
    const active = i === current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--spacing-scale-base)",
        flex: "0 0 auto",
        width: 96
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: done || active ? "var(--interactive)" : "var(--pure-0)",
        border: `var(--border-width-thick) solid ${done || active ? "var(--interactive)" : "var(--border-color-strong)"}`,
        color: done || active ? "var(--text-inverse)" : "var(--text-secondary)",
        fontWeight: "var(--font-weight-semi-bold)",
        fontSize: "var(--font-size-scale-down-01)"
      }
    }, done ? /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check",
      "aria-hidden": "true"
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--font-size-scale-down-01)",
        textAlign: "center",
        color: active ? "var(--text-strong)" : "var(--text-secondary)",
        fontWeight: active ? "var(--font-weight-semi-bold)" : "var(--font-weight-regular)"
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        background: i < current ? "var(--interactive)" : "var(--border-color)",
        marginTop: 15
      }
    }));
  }));
}
Object.assign(__ds_scope, { Step });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Step.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tab.jsx
try { (() => {
/** GOV.BR Tab (`.br-tab`) — content tabs. */
function Tab({
  tabs = [],
  active,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(0);
  const cur = active ?? internal;
  const select = i => {
    setInternal(i);
    onChange && onChange(i);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--spacing-scale-3x)",
      borderBottom: "var(--border-width-hair) solid var(--border-color)"
    }
  }, tabs.map((t, i) => {
    const on = i === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(i),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--spacing-scale-base)",
        padding: "var(--spacing-scale-2x) var(--spacing-scale-half)",
        background: "none",
        border: "none",
        cursor: "pointer",
        font: "inherit",
        fontWeight: on ? "var(--font-weight-semi-bold)" : "var(--font-weight-regular)",
        color: on ? "var(--interactive)" : "var(--text-secondary)",
        borderBottom: `var(--border-width-heavy) solid ${on ? "var(--interactive)" : "transparent"}`,
        marginBottom: -1
      }
    }, t.icon && /*#__PURE__*/React.createElement("i", {
      className: t.icon,
      "aria-hidden": "true"
    }), t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--font-size-scale-down-01)",
        background: "var(--gray-10)",
        borderRadius: "var(--surface-rounder-pill)",
        padding: "1px 8px"
      }
    }, t.count));
  })), tabs[cur]?.content && /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    style: {
      paddingTop: "var(--spacing-scale-3x)"
    }
  }, tabs[cur].content));
}
Object.assign(__ds_scope, { Tab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tab.jsx", error: String((e && e.message) || e) }); }

// components/product/Accordion.jsx
try { (() => {
/** GOV.BR Accordion (`.br-accordion`) — collapsible sections. */
function Accordion({
  items = [],
  single = true,
  style
}) {
  const [open, setOpen] = React.useState(() => items.length && items[0].open ? [0] : []);
  const toggle = i => {
    setOpen(cur => {
      const isOpen = cur.includes(i);
      if (single) return isOpen ? [] : [i];
      return isOpen ? cur.filter(x => x !== i) : [...cur, i];
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "var(--border-width-hair) solid var(--border-color)",
      borderRadius: "var(--surface-rounder-sm)",
      overflow: "hidden",
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i > 0 ? "var(--border-width-hair) solid var(--border-color)" : "none"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-scale-2x)",
        width: "100%",
        padding: "var(--spacing-scale-2x) var(--spacing-scale-3x)",
        background: isOpen ? "var(--blue-warm-5)" : "var(--pure-0)",
        border: "none",
        cursor: "pointer",
        font: "inherit",
        fontWeight: "var(--font-weight-medium)",
        color: "var(--text-strong)",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.title), /*#__PURE__*/React.createElement("i", {
      className: `fas fa-angle-${isOpen ? "up" : "down"}`,
      "aria-hidden": "true",
      style: {
        color: "var(--interactive)"
      }
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--spacing-scale-2x) var(--spacing-scale-3x)",
        color: "var(--text-default)"
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/product/Avatar.jsx
try { (() => {
/** GOV.BR Avatar (`.br-avatar`) — user photo/initials circle. */
function Avatar({
  name = "",
  src,
  size = 40,
  style
}) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      background: "var(--interactive)",
      color: "var(--text-inverse)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: size * 0.4,
      flexShrink: 0,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/product/Carousel.jsx
try { (() => {
/** GOV.BR Carousel (`.br-carousel`) — paged content with dots + arrows. */
function Carousel({
  pages = [],
  style
}) {
  const [i, setI] = React.useState(0);
  const go = n => setI((n + pages.length) % pages.length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--surface-card)",
      borderRadius: "var(--surface-rounder-md)",
      boxShadow: "var(--surface-shadow-sm)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 160,
      padding: "var(--spacing-scale-5x) var(--spacing-scale-6x)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  }, pages[i]), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(i - 1),
    "aria-label": "Anterior",
    style: arrow("left")
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-left"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(i + 1),
    "aria-label": "Pr\xF3ximo",
    style: arrow("right")
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-right"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "var(--spacing-scale-base)",
      paddingBottom: "var(--spacing-scale-2x)"
    }
  }, pages.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => go(n),
    "aria-label": `Página ${n + 1}`,
    style: {
      width: n === i ? 24 : 8,
      height: 8,
      borderRadius: "var(--surface-rounder-pill)",
      border: "none",
      cursor: "pointer",
      background: n === i ? "var(--interactive)" : "var(--gray-20)",
      transition: "width var(--duration) var(--easing-standard)"
    }
  }))));
}
function arrow(side) {
  return {
    position: "absolute",
    top: "50%",
    [side]: 8,
    transform: "translateY(-50%)",
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    background: "var(--pure-0)",
    color: "var(--interactive)",
    boxShadow: "var(--surface-shadow-sm)"
  };
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/product/Cookiebar.jsx
try { (() => {
/** GOV.BR Cookiebar (`.br-cookiebar`) — LGPD cookie-consent modal. */
function Cookiebar({
  onAccept,
  onSettings,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": "Configura\xE7\xE3o de Cookies",
    style: {
      maxWidth: 720,
      background: "var(--surface-card)",
      borderRadius: "var(--surface-rounder-md)",
      boxShadow: "var(--surface-shadow-lg)",
      padding: "var(--spacing-scale-4x)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 0,
      marginBottom: "var(--spacing-scale-2x)",
      fontSize: "var(--text-h4)"
    }
  }, "Este site usa cookies"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-default)",
      fontSize: "var(--font-size-scale-base)"
    }
  }, "Utilizamos cookies para melhorar sua experi\xEAncia de navega\xE7\xE3o. Ao desativar qualquer cookie, sua navega\xE7\xE3o poder\xE1 ser comprometida. Consulte nossa pol\xEDtica de privacidade para mais informa\xE7\xF5es."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--spacing-scale-2x)",
      marginTop: "var(--spacing-scale-2x)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "small",
    onClick: onSettings
  }, "Definir Cookies"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "small",
    onClick: onAccept
  }, "Aceitar")));
}
Object.assign(__ds_scope, { Cookiebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Cookiebar.jsx", error: String((e && e.message) || e) }); }

// components/product/Header.jsx
try { (() => {
/**
 * GOV.BR brand wordmark rendered in plain type (no official logo asset provided).
 * Replace with the official gov.br SVG lockup when available.
 */
function BrandMark({
  size = 28,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      fontFamily: "var(--font-family-base)",
      fontWeight: "var(--font-weight-extra-bold)",
      fontSize: size,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--blue-warm-vivid-70)"
    }
  }, "gov"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-cool-vivid-50)"
    }
  }, ".br"));
}

/** GOV.BR Header (`.br-header`) — institutional top bar. */
function Header({
  title,
  subtitle,
  signedIn = false,
  userName = "Cidadão",
  onSignIn,
  compact = false,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--surface-header)",
      boxShadow: "var(--surface-shadow-header)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-scale-3x)",
      padding: compact ? "var(--spacing-scale-baseh) var(--spacing-scale-3x)" : "var(--spacing-scale-2x) var(--spacing-scale-3x)",
      maxWidth: "var(--container-xl)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: compact ? 24 : 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-scale-3x)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Buscar",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "inherit",
      fontSize: "1.1em"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-search"
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Notifica\xE7\xF5es",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "inherit",
      fontSize: "1.1em",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bell"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -4,
      right: -6,
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--danger)"
    }
  })), signedIn ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--spacing-scale-base)",
      color: "var(--text-default)",
      fontWeight: "var(--font-weight-medium)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "var(--interactive)",
      color: "var(--text-inverse)",
      fontSize: "var(--font-size-scale-down-01)",
      fontWeight: "var(--font-weight-bold)"
    }
  }, userName.slice(0, 2).toUpperCase()), userName) : /*#__PURE__*/React.createElement("button", {
    onClick: onSignIn,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--spacing-scale-base)",
      height: 32,
      padding: "0 var(--spacing-scale-2x)",
      borderRadius: "var(--surface-rounder-pill)",
      border: "var(--border-width-hair) solid var(--interactive)",
      background: "transparent",
      color: "var(--interactive)",
      cursor: "pointer",
      font: "inherit",
      fontWeight: "var(--font-weight-semi-bold)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user",
    "aria-hidden": "true"
  }), " Entrar"))), (title || subtitle) && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "var(--border-width-hair) solid var(--border-color)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-scale-2x)",
      padding: "var(--spacing-scale-2x) var(--spacing-scale-3x)",
      maxWidth: "var(--container-xl)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--interactive)",
      fontSize: "1.25em"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bars"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--font-weight-semi-bold)",
      color: "var(--text-strong)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--text-secondary)"
    }
  }, subtitle)))));
}
Object.assign(__ds_scope, { BrandMark, Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Header.jsx", error: String((e && e.message) || e) }); }

// components/product/Footer.jsx
try { (() => {
/** GOV.BR Footer (`.br-footer`) — institutional footer on azul-marinho. */
function Footer({
  columns = [],
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "govbr-dark",
    style: {
      background: "var(--blue-warm-vivid-90)",
      color: "var(--pure-0)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--spacing-scale-6x) var(--spacing-scale-3x)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BrandMark, {
    size: 32,
    style: {
      marginBottom: "var(--spacing-scale-4x)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "var(--spacing-scale-4x)"
    }
  }, columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--font-weight-semi-bold)",
      marginBottom: "var(--spacing-scale-2x)"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing-scale-base)"
    }
  }, col.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href || "#",
    style: {
      color: "var(--gray-20)",
      textDecoration: "none",
      fontSize: "var(--font-size-scale-down-01)"
    }
  }, l.label)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "var(--border-width-hair) solid rgba(255,255,255,0.16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--spacing-scale-2x) var(--spacing-scale-3x)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--spacing-scale-2x)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--gray-20)"
    }
  }, note || "Acesso à Informação · Governo Federal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--spacing-scale-2x)",
      fontSize: "1.1em"
    }
  }, ["facebook", "twitter", "instagram", "youtube"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      color: "var(--pure-0)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fab fa-${s}`
  })))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Footer.jsx", error: String((e && e.message) || e) }); }

// components/product/SignIn.jsx
try { (() => {
const LOGO = "https://sso.acesso.gov.br/assets/govbr/img/govbr.png";

/**
 * GOV.BR Sign-in ("Login Único" / Entrar com gov.br) — faithful recreation of
 * the sso.acesso.gov.br identification card: CPF entry plus alternative
 * identification methods.
 */
function SignIn({
  onContinue,
  style
}) {
  const options = [{
    icon: "fas fa-university",
    label: "Login com seu banco",
    badge: "SUA CONTA SERÁ PRATA"
  }, {
    icon: "fas fa-qrcode",
    label: "Login com QR code"
  }, {
    icon: "fas fa-certificate",
    label: "Seu certificado digital"
  }, {
    icon: "fas fa-cloud",
    label: "Seu certificado digital em nuvem"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 400,
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h4)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--text-strong)",
      margin: "0 0 var(--spacing-scale-3x)"
    }
  }, "Identifique-se no gov.br com:"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--font-weight-bold)",
      color: "var(--text-strong)",
      marginBottom: "var(--spacing-scale-half)"
    }
  }, "N\xFAmero do CPF"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--text-secondary)",
      margin: "0 0 var(--spacing-scale-2x)"
    }
  }, "Digite seu CPF para ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-default)"
    }
  }, "criar"), " ou ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-default)"
    }
  }, "acessar"), " sua conta gov.br"), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "cpf",
    placeholder: "Digite seu CPF"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--spacing-scale-3x)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    block: true,
    onClick: onContinue
  }, "Continuar")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--font-weight-bold)",
      color: "var(--text-strong)",
      margin: "var(--spacing-scale-5x) 0 var(--spacing-scale-2x)"
    }
  }, "Outras op\xE7\xF5es de identifica\xE7\xE3o:"), /*#__PURE__*/React.createElement("div", null, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.label,
    onClick: onContinue,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-scale-2x)",
      width: "100%",
      padding: "var(--spacing-scale-2x) 0",
      background: "none",
      border: "none",
      borderBottom: "var(--border-width-hair) solid var(--border-color)",
      cursor: "pointer",
      font: "inherit",
      color: "var(--text-default)",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: o.icon,
    style: {
      color: "var(--interactive)",
      width: 24,
      textAlign: "center",
      fontSize: "1.1em"
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, o.label, o.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--font-size-scale-down-02)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--success)",
      letterSpacing: "var(--tracking-wide)"
    }
  }, o.badge)), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-right",
    style: {
      color: "var(--gray-40)"
    },
    "aria-hidden": "true"
  })))));
}

/** Minimal Login Único header: official gov.br logo + accessibility controls. */
function SignInHeader({
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--spacing-scale-2x) var(--spacing-scale-3x)",
      background: "var(--pure-0)",
      borderBottom: "var(--border-width-hair) solid var(--border-color)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "gov.br",
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-scale-3x)",
      fontSize: "var(--font-size-scale-down-01)",
      color: "var(--interactive)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-adjust",
    "aria-hidden": "true"
  }), " Alto Contraste"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-hands",
    "aria-hidden": "true"
  }), " VLibras")));
}
Object.assign(__ds_scope, { SignIn, SignInHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/SignIn.jsx", error: String((e && e.message) || e) }); }

// components/product/Table.jsx
try { (() => {
/** GOV.BR Table (`.br-table`) — data table with header toolbar + selection. */
function Table({
  columns = [],
  rows = [],
  title,
  selectable = false,
  density = "medium",
  style
}) {
  const [sel, setSel] = React.useState([]);
  const pad = {
    small: "var(--spacing-scale-base) var(--spacing-scale-2x)",
    medium: "var(--spacing-scale-baseh) var(--spacing-scale-2x)",
    large: "var(--spacing-scale-2x) var(--spacing-scale-3x)"
  }[density];
  const toggle = i => setSel(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--surface-rounder-md)",
      boxShadow: "var(--surface-shadow-sm)",
      overflow: "hidden",
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--spacing-scale-2x) var(--spacing-scale-3x)",
      borderBottom: "var(--border-width-hair) solid var(--border-color)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, sel.length ? `${sel.length} selecionado(s)` : title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--spacing-scale-2x)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-search"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-filter"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-ellipsis-v"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "var(--font-size-scale-base)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--gray-2)",
      textAlign: "left"
    }
  }, selectable && /*#__PURE__*/React.createElement("th", {
    style: {
      padding: pad,
      width: 40
    }
  }), columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      padding: pad,
      fontWeight: "var(--font-weight-semi-bold)",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderTop: "var(--border-width-hair) solid var(--border-color)",
      background: sel.includes(i) ? "var(--blue-warm-5)" : "transparent"
    }
  }, selectable && /*#__PURE__*/React.createElement("td", {
    style: {
      padding: pad
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: sel.includes(i),
    onChange: () => toggle(i)
  })), r.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      padding: pad,
      color: "var(--text-default)"
    }
  }, cell))))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Table.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Loading = __ds_scope.Loading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Message = __ds_scope.Message;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Notification = __ds_scope.Notification;

__ds_ns.Scrim = __ds_scope.Scrim;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Upload = __ds_scope.Upload;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.List = __ds_scope.List;

__ds_ns.Item = __ds_scope.Item;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Step = __ds_scope.Step;

__ds_ns.Tab = __ds_scope.Tab;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.Cookiebar = __ds_scope.Cookiebar;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.SignIn = __ds_scope.SignIn;

__ds_ns.SignInHeader = __ds_scope.SignInHeader;

__ds_ns.Table = __ds_scope.Table;

})();
