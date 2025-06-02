# 📋 Reporte de Migración i18n - Controladores

## 📊 Resumen
- **Archivos analizados**: 6
- **Mensajes encontrados**: 245
- **Claves sugeridas**: 245

## 🔍 Mensajes Hardcodeados Encontrados

### 📄 adminController.js

#### 1. Línea 11

**Mensaje actual:**
```javascript
Se requiere una lista válida de IDs de usuario
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Se requiere una lista válida de IDs de usuario'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('admin.se_requiere_una_lista_vlida_de_ids_de_usuario')
```

**Clave de traducción:** `admin.se_requiere_una_lista_vlida_de_ids_de_usuario`

---

#### 2. Línea 15

**Mensaje actual:**
```javascript
Se requiere especificar una acción
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Se requiere especificar una acción'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('admin.se_requiere_especificar_una_accin')
```

**Clave de traducción:** `admin.se_requiere_especificar_una_accin`

---

#### 3. Línea 65

**Mensaje actual:**
```javascript
Se requiere especificar un rol
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Se requiere especificar un rol'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('admin.se_requiere_especificar_un_rol')
```

**Clave de traducción:** `admin.se_requiere_especificar_un_rol`

---

#### 4. Línea 93

**Mensaje actual:**
```javascript
Acción no soportada
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Acción no soportada'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('admin.accin_no_soportada')
```

**Clave de traducción:** `admin.accin_no_soportada`

---

#### 5. Línea 103

**Mensaje actual:**
```javascript
Error en acción masiva
```

**Contexto:**
```javascript
res.status(500).json({ 
      error: 'Error en acción masiva'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
      error: req.t('admin.error_en_accin_masiva')
```

**Clave de traducción:** `admin.error_en_accin_masiva`

---

#### 6. Línea 116

**Mensaje actual:**
```javascript
Se requiere un correo electrónico
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Se requiere un correo electrónico'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('admin.se_requiere_un_correo_electrnico')
```

**Clave de traducción:** `admin.se_requiere_un_correo_electrnico`

---

#### 7. Línea 136

**Mensaje actual:**
```javascript
Error al generar invitación
```

**Contexto:**
```javascript
res.status(500).json({ 
      error: 'Error al generar invitación'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
      error: req.t('admin.error_al_generar_invitacin')
```

**Clave de traducción:** `admin.error_al_generar_invitacin`

---

#### 8. Línea 170

**Mensaje actual:**
```javascript
Error al recuperar usuarios
```

**Contexto:**
```javascript
res.status(500).json({ 
          error: 'Error al recuperar usuarios'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
          error: req.t('admin.error_al_recuperar_usuarios')
```

**Clave de traducción:** `admin.error_al_recuperar_usuarios`

---

#### 9. Línea 278

**Mensaje actual:**
```javascript
Error inesperado
```

**Contexto:**
```javascript
res.status(500).json({ 
      error: 'Error inesperado'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
      error: req.t('admin.error_inesperado')
```

**Clave de traducción:** `admin.error_inesperado`

---

#### 10. Línea 308

**Mensaje actual:**
```javascript
Error al recuperar mascotas
```

**Contexto:**
```javascript
res.status(500).json({ 
          error: 'Error al recuperar mascotas'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
          error: req.t('admin.error_al_recuperar_mascotas')
```

**Clave de traducción:** `admin.error_al_recuperar_mascotas`

---

#### 11. Línea 328

**Mensaje actual:**
```javascript
Error inesperado
```

**Contexto:**
```javascript
res.status(500).json({ 
      error: 'Error inesperado'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
      error: req.t('admin.error_inesperado')
```

**Clave de traducción:** `admin.error_inesperado`

---

#### 12. Línea 342

**Mensaje actual:**
```javascript
No tienes permiso para realizar esta acción
```

**Contexto:**
```javascript
res.status(403).json({ error: 'No tienes permiso para realizar esta acción'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('admin.no_tienes_permiso_para_realizar_esta_accin')
```

**Clave de traducción:** `admin.no_tienes_permiso_para_realizar_esta_accin`

---

#### 13. Línea 355

**Mensaje actual:**
```javascript
Error al actualizar mascota
```

**Contexto:**
```javascript
res.status(500).json({ 
          error: 'Error al actualizar mascota'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
          error: req.t('admin.error_al_actualizar_mascota')
```

**Clave de traducción:** `admin.error_al_actualizar_mascota`

---

#### 14. Línea 363

**Mensaje actual:**
```javascript
Error inesperado
```

**Contexto:**
```javascript
res.status(500).json({ 
      error: 'Error inesperado'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
      error: req.t('admin.error_inesperado')
```

**Clave de traducción:** `admin.error_inesperado`

---

#### 15. Línea 379

**Mensaje actual:**
```javascript
No permission to update user in this organization
```

**Contexto:**
```javascript
res.status(403).json({ error: 'No permission to update user in this organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('admin.no_permission_to_update_user_in_this_organization')
```

**Clave de traducción:** `admin.no_permission_to_update_user_in_this_organization`

---

#### 16. Línea 384

**Mensaje actual:**
```javascript
Solo los administradores pueden cambiar roles
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Solo los administradores pueden cambiar roles'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('admin.solo_los_administradores_pueden_cambiar_roles')
```

**Clave de traducción:** `admin.solo_los_administradores_pueden_cambiar_roles`

---

#### 17. Línea 401

**Mensaje actual:**
```javascript
Error al actualizar usuario
```

**Contexto:**
```javascript
res.status(500).json({ 
          error: 'Error al actualizar usuario'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
          error: req.t('admin.error_al_actualizar_usuario')
```

**Clave de traducción:** `admin.error_al_actualizar_usuario`

---

#### 18. Línea 409

**Mensaje actual:**
```javascript
Error inesperado
```

**Contexto:**
```javascript
res.status(500).json({ 
      error: 'Error inesperado'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
      error: req.t('admin.error_inesperado')
```

**Clave de traducción:** `admin.error_inesperado`

---

#### 19. Línea 424

**Mensaje actual:**
```javascript
No permission to delete user in this organization
```

**Contexto:**
```javascript
res.status(403).json({ error: 'No permission to delete user in this organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('admin.no_permission_to_delete_user_in_this_organization')
```

**Clave de traducción:** `admin.no_permission_to_delete_user_in_this_organization`

---

#### 20. Línea 440

**Mensaje actual:**
```javascript
Error al eliminar usuario
```

**Contexto:**
```javascript
res.status(500).json({ 
          error: 'Error al eliminar usuario'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
          error: req.t('admin.error_al_eliminar_usuario')
```

**Clave de traducción:** `admin.error_al_eliminar_usuario`

---

#### 21. Línea 448

**Mensaje actual:**
```javascript
Error inesperado
```

**Contexto:**
```javascript
res.status(500).json({ 
      error: 'Error inesperado'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
      error: req.t('admin.error_inesperado')
```

**Clave de traducción:** `admin.error_inesperado`

---

#### 22. Línea 464

**Mensaje actual:**
```javascript
No permission to update user role in this organization
```

**Contexto:**
```javascript
res.status(403).json({ error: 'No permission to update user role in this organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('admin.no_permission_to_update_user_role_in_this_organiza')
```

**Clave de traducción:** `admin.no_permission_to_update_user_role_in_this_organiza`

---

#### 23. Línea 468

**Mensaje actual:**
```javascript
Se requiere especificar un rol
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Se requiere especificar un rol'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('admin.se_requiere_especificar_un_rol')
```

**Clave de traducción:** `admin.se_requiere_especificar_un_rol`

---

#### 24. Línea 475

**Mensaje actual:**
```javascript
Error al actualizar rol en autenticación
```

**Contexto:**
```javascript
res.status(500).json({ 
        error: 'Error al actualizar rol en autenticación'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
        error: req.t('admin.error_al_actualizar_rol_en_autenticacin')
```

**Clave de traducción:** `admin.error_al_actualizar_rol_en_autenticacin`

---

#### 25. Línea 486

**Mensaje actual:**
```javascript
Error al actualizar rol en base de datos
```

**Contexto:**
```javascript
res.status(500).json({ 
          error: 'Error al actualizar rol en base de datos'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
          error: req.t('admin.error_al_actualizar_rol_en_base_de_datos')
```

**Clave de traducción:** `admin.error_al_actualizar_rol_en_base_de_datos`

---

#### 26. Línea 497

**Mensaje actual:**
```javascript
Error inesperado
```

**Contexto:**
```javascript
res.status(500).json({ 
      error: 'Error inesperado'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
      error: req.t('admin.error_inesperado')
```

**Clave de traducción:** `admin.error_inesperado`

---

#### 27. Línea 509

**Mensaje actual:**
```javascript
Email and password are required
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Email and password are required'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('admin.email_and_password_are_required')
```

**Clave de traducción:** `admin.email_and_password_are_required`

---

#### 28. Línea 536

**Mensaje actual:**
```javascript
Error al crear usuario en base de datos
```

**Contexto:**
```javascript
res.status(500).json({
        error: 'Error al crear usuario en base de datos'
```

**Sugerencia:**
```javascript
res.status(500).json({
        error: req.t('admin.error_al_crear_usuario_en_base_de_datos')
```

**Clave de traducción:** `admin.error_al_crear_usuario_en_base_de_datos`

---

#### 29. Línea 547

**Mensaje actual:**
```javascript
Error creating user
```

**Contexto:**
```javascript
res.status(500).json({
      error: 'Error creating user'
```

**Sugerencia:**
```javascript
res.status(500).json({
      error: req.t('common.error_creating')
```

**Clave de traducción:** `common.error_creating`

---

#### 30. Línea 96

**Mensaje actual:**
```javascript
Acción 
```

**Contexto:**
```javascript
res.status(200).json({
      message: `Acción "
```

**Sugerencia:**
```javascript
res.status(200).json({
      message: req.t('admin.accin_')
```

**Clave de traducción:** `admin.accin_`

---

#### 31. Línea 130

**Mensaje actual:**
```javascript
Invitación generada correctamente
```

**Contexto:**
```javascript
res.status(200).json({ 
      message: 'Invitación generada correctamente'
```

**Sugerencia:**
```javascript
res.status(200).json({ 
      message: req.t('admin.invitacin_generada_correctamente')
```

**Clave de traducción:** `admin.invitacin_generada_correctamente`

---

#### 32. Línea 491

**Mensaje actual:**
```javascript
Rol actualizado correctamente a 
```

**Contexto:**
```javascript
res.status(200).json({
        message: `Rol actualizado correctamente a "
```

**Sugerencia:**
```javascript
res.status(200).json({
        message: req.t('admin.rol_actualizado_correctamente_a_')
```

**Clave de traducción:** `admin.rol_actualizado_correctamente_a_`

---

#### 33. Línea 541

**Mensaje actual:**
```javascript
User created successfully
```

**Contexto:**
```javascript
res.status(201).json({
      message: 'User created successfully'
```

**Sugerencia:**
```javascript
res.status(201).json({
      message: req.t('users.created')
```

**Clave de traducción:** `users.created`

---

#### 34. Línea 11

**Mensaje actual:**
```javascript
Se requiere una lista válida de IDs de usuario
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Se requiere una lista válida de IDs de usuario'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('admin.se_requiere_una_lista_vlida_de_ids_de_usuario')
```

**Clave de traducción:** `admin.se_requiere_una_lista_vlida_de_ids_de_usuario`

---

#### 35. Línea 15

**Mensaje actual:**
```javascript
Se requiere especificar una acción
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Se requiere especificar una acción'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('admin.se_requiere_especificar_una_accin')
```

**Clave de traducción:** `admin.se_requiere_especificar_una_accin`

---

#### 36. Línea 65

**Mensaje actual:**
```javascript
Se requiere especificar un rol
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Se requiere especificar un rol'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('admin.se_requiere_especificar_un_rol')
```

**Clave de traducción:** `admin.se_requiere_especificar_un_rol`

---

#### 37. Línea 93

**Mensaje actual:**
```javascript
Acción no soportada
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Acción no soportada'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('admin.accin_no_soportada')
```

**Clave de traducción:** `admin.accin_no_soportada`

---

#### 38. Línea 116

**Mensaje actual:**
```javascript
Se requiere un correo electrónico
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Se requiere un correo electrónico'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('admin.se_requiere_un_correo_electrnico')
```

**Clave de traducción:** `admin.se_requiere_un_correo_electrnico`

---

#### 39. Línea 170

**Mensaje actual:**
```javascript
Error al recuperar usuarios
```

**Contexto:**
```javascript
return res.status(500).json({ 
          error: 'Error al recuperar usuarios'
```

**Sugerencia:**
```javascript
return res.status(500).json({ 
          error: req.t('admin.error_al_recuperar_usuarios')
```

**Clave de traducción:** `admin.error_al_recuperar_usuarios`

---

#### 40. Línea 308

**Mensaje actual:**
```javascript
Error al recuperar mascotas
```

**Contexto:**
```javascript
return res.status(500).json({ 
          error: 'Error al recuperar mascotas'
```

**Sugerencia:**
```javascript
return res.status(500).json({ 
          error: req.t('admin.error_al_recuperar_mascotas')
```

**Clave de traducción:** `admin.error_al_recuperar_mascotas`

---

#### 41. Línea 342

**Mensaje actual:**
```javascript
No tienes permiso para realizar esta acción
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'No tienes permiso para realizar esta acción'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('admin.no_tienes_permiso_para_realizar_esta_accin')
```

**Clave de traducción:** `admin.no_tienes_permiso_para_realizar_esta_accin`

---

#### 42. Línea 355

**Mensaje actual:**
```javascript
Error al actualizar mascota
```

**Contexto:**
```javascript
return res.status(500).json({ 
          error: 'Error al actualizar mascota'
```

**Sugerencia:**
```javascript
return res.status(500).json({ 
          error: req.t('admin.error_al_actualizar_mascota')
```

**Clave de traducción:** `admin.error_al_actualizar_mascota`

---

#### 43. Línea 379

**Mensaje actual:**
```javascript
No permission to update user in this organization
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'No permission to update user in this organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('admin.no_permission_to_update_user_in_this_organization')
```

**Clave de traducción:** `admin.no_permission_to_update_user_in_this_organization`

---

#### 44. Línea 384

**Mensaje actual:**
```javascript
Solo los administradores pueden cambiar roles
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Solo los administradores pueden cambiar roles'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('admin.solo_los_administradores_pueden_cambiar_roles')
```

**Clave de traducción:** `admin.solo_los_administradores_pueden_cambiar_roles`

---

#### 45. Línea 401

**Mensaje actual:**
```javascript
Error al actualizar usuario
```

**Contexto:**
```javascript
return res.status(500).json({ 
          error: 'Error al actualizar usuario'
```

**Sugerencia:**
```javascript
return res.status(500).json({ 
          error: req.t('admin.error_al_actualizar_usuario')
```

**Clave de traducción:** `admin.error_al_actualizar_usuario`

---

#### 46. Línea 424

**Mensaje actual:**
```javascript
No permission to delete user in this organization
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'No permission to delete user in this organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('admin.no_permission_to_delete_user_in_this_organization')
```

**Clave de traducción:** `admin.no_permission_to_delete_user_in_this_organization`

---

#### 47. Línea 440

**Mensaje actual:**
```javascript
Error al eliminar usuario
```

**Contexto:**
```javascript
return res.status(500).json({ 
          error: 'Error al eliminar usuario'
```

**Sugerencia:**
```javascript
return res.status(500).json({ 
          error: req.t('admin.error_al_eliminar_usuario')
```

**Clave de traducción:** `admin.error_al_eliminar_usuario`

---

#### 48. Línea 464

**Mensaje actual:**
```javascript
No permission to update user role in this organization
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'No permission to update user role in this organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('admin.no_permission_to_update_user_role_in_this_organiza')
```

**Clave de traducción:** `admin.no_permission_to_update_user_role_in_this_organiza`

---

#### 49. Línea 468

**Mensaje actual:**
```javascript
Se requiere especificar un rol
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Se requiere especificar un rol'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('admin.se_requiere_especificar_un_rol')
```

**Clave de traducción:** `admin.se_requiere_especificar_un_rol`

---

#### 50. Línea 475

**Mensaje actual:**
```javascript
Error al actualizar rol en autenticación
```

**Contexto:**
```javascript
return res.status(500).json({ 
        error: 'Error al actualizar rol en autenticación'
```

**Sugerencia:**
```javascript
return res.status(500).json({ 
        error: req.t('admin.error_al_actualizar_rol_en_autenticacin')
```

**Clave de traducción:** `admin.error_al_actualizar_rol_en_autenticacin`

---

#### 51. Línea 486

**Mensaje actual:**
```javascript
Error al actualizar rol en base de datos
```

**Contexto:**
```javascript
return res.status(500).json({ 
          error: 'Error al actualizar rol en base de datos'
```

**Sugerencia:**
```javascript
return res.status(500).json({ 
          error: req.t('admin.error_al_actualizar_rol_en_base_de_datos')
```

**Clave de traducción:** `admin.error_al_actualizar_rol_en_base_de_datos`

---

#### 52. Línea 509

**Mensaje actual:**
```javascript
Email and password are required
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Email and password are required'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('admin.email_and_password_are_required')
```

**Clave de traducción:** `admin.email_and_password_are_required`

---

#### 53. Línea 536

**Mensaje actual:**
```javascript
Error al crear usuario en base de datos
```

**Contexto:**
```javascript
return res.status(500).json({
        error: 'Error al crear usuario en base de datos'
```

**Sugerencia:**
```javascript
return res.status(500).json({
        error: req.t('admin.error_al_crear_usuario_en_base_de_datos')
```

**Clave de traducción:** `admin.error_al_crear_usuario_en_base_de_datos`

---

### 📄 authController.js

#### 1. Línea 411

**Mensaje actual:**
```javascript
Refresh token requerido
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Refresh token requerido'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('auth.refresh_token_requerido')
```

**Clave de traducción:** `auth.refresh_token_requerido`

---

#### 2. Línea 421

**Mensaje actual:**
```javascript
Refresh token inválido o expirado
```

**Contexto:**
```javascript
res.status(401).json({ error: 'Refresh token inválido o expirado'
```

**Sugerencia:**
```javascript
res.status(401).json({ error: req.t('auth.refresh_token_invlido_o_expirado')
```

**Clave de traducción:** `auth.refresh_token_invlido_o_expirado`

---

#### 3. Línea 411

**Mensaje actual:**
```javascript
Refresh token requerido
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Refresh token requerido'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('auth.refresh_token_requerido')
```

**Clave de traducción:** `auth.refresh_token_requerido`

---

#### 4. Línea 421

**Mensaje actual:**
```javascript
Refresh token inválido o expirado
```

**Contexto:**
```javascript
return res.status(401).json({ error: 'Refresh token inválido o expirado'
```

**Sugerencia:**
```javascript
return res.status(401).json({ error: req.t('auth.refresh_token_invlido_o_expirado')
```

**Clave de traducción:** `auth.refresh_token_invlido_o_expirado`

---

### 📄 conversationController.js

#### 1. Línea 10

**Mensaje actual:**
```javascript
Participants must be an array with at least two participants
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Participants must be an array with at least two participants'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('conversations.participants_must_be_an_array_with_at_least_two_pa')
```

**Clave de traducción:** `conversations.participants_must_be_an_array_with_at_least_two_pa`

---

#### 2. Línea 31

**Mensaje actual:**
```javascript
Forbidden: All conversation participants must belong to the organization
```

**Contexto:**
```javascript
res.status(403).json({ 
              error: 'Forbidden: All conversation participants must belong to the organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
              error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 3. Línea 37

**Mensaje actual:**
```javascript
Error verifying organization membership
```

**Contexto:**
```javascript
res.status(500).json({ 
            error: 'Error verifying organization membership'
```

**Sugerencia:**
```javascript
res.status(500).json({ 
            error: req.t('conversations.error_verifying_organization_membership')
```

**Clave de traducción:** `conversations.error_verifying_organization_membership`

---

#### 4. Línea 51

**Mensaje actual:**
```javascript
Error creating conversation
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error creating conversation'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_creating')
```

**Clave de traducción:** `common.error_creating`

---

#### 5. Línea 61

**Mensaje actual:**
```javascript
Invalid conversation ID format
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Invalid conversation ID format'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 6. Línea 68

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 7. Línea 78

**Mensaje actual:**
```javascript
Forbidden: Cannot access conversation outside your organization
```

**Contexto:**
```javascript
res.status(403).json({ 
        error: 'Forbidden: Cannot access conversation outside your organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 8. Línea 86

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to view this conversation
```

**Contexto:**
```javascript
res.status(403).json({ 
        error: 'Forbidden: You must be a participant to view this conversation'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 9. Línea 96

**Mensaje actual:**
```javascript
Error retrieving conversation
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving conversation'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 10. Línea 128

**Mensaje actual:**
```javascript
Forbidden: Cannot access conversations for users outside your organization
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Cannot access conversations for users outside your organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 11. Línea 142

**Mensaje actual:**
```javascript
Forbidden: Only organization admins can view other users\
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Only organization admins can view other users\'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 12. Línea 155

**Mensaje actual:**
```javascript
Forbidden: You can only view your own conversations
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: You can only view your own conversations'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 13. Línea 163

**Mensaje actual:**
```javascript
Error retrieving conversations
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving conversations'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 14. Línea 176

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 15. Línea 183

**Mensaje actual:**
```javascript
Forbidden: Cannot access conversation outside your organization
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Cannot access conversation outside your organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 16. Línea 191

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to modify this conversation
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: You must be a participant to modify this conversation'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 17. Línea 203

**Mensaje actual:**
```javascript
Error soft deleting conversation
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error soft deleting conversation'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('conversations.error_soft_deleting_conversation')
```

**Clave de traducción:** `conversations.error_soft_deleting_conversation`

---

#### 18. Línea 221

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 19. Línea 226

**Mensaje actual:**
```javascript
Forbidden: Cannot delete conversation outside your organization
```

**Contexto:**
```javascript
res.status(403).json({ 
        error: 'Forbidden: Cannot delete conversation outside your organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 20. Línea 241

**Mensaje actual:**
```javascript
Forbidden: Insufficient permissions to permanently delete conversations
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Insufficient permissions to permanently delete conversations'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 21. Línea 248

**Mensaje actual:**
```javascript
Forbidden: Insufficient permissions to permanently delete conversations
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Insufficient permissions to permanently delete conversations'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 22. Línea 260

**Mensaje actual:**
```javascript
Error permanently deleting conversation
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error permanently deleting conversation'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('conversations.error_permanently_deleting_conversation')
```

**Clave de traducción:** `conversations.error_permanently_deleting_conversation`

---

#### 23. Línea 309

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 24. Línea 333

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 25. Línea 357

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 26. Línea 381

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 27. Línea 413

**Mensaje actual:**
```javascript
Error retrieving conversations
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving conversations'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 28. Línea 10

**Mensaje actual:**
```javascript
Participants must be an array with at least two participants
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Participants must be an array with at least two participants'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('conversations.participants_must_be_an_array_with_at_least_two_pa')
```

**Clave de traducción:** `conversations.participants_must_be_an_array_with_at_least_two_pa`

---

#### 29. Línea 31

**Mensaje actual:**
```javascript
Forbidden: All conversation participants must belong to the organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
              error: 'Forbidden: All conversation participants must belong to the organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
              error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 30. Línea 37

**Mensaje actual:**
```javascript
Error verifying organization membership
```

**Contexto:**
```javascript
return res.status(500).json({ 
            error: 'Error verifying organization membership'
```

**Sugerencia:**
```javascript
return res.status(500).json({ 
            error: req.t('conversations.error_verifying_organization_membership')
```

**Clave de traducción:** `conversations.error_verifying_organization_membership`

---

#### 31. Línea 61

**Mensaje actual:**
```javascript
Invalid conversation ID format
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Invalid conversation ID format'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 32. Línea 68

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 33. Línea 78

**Mensaje actual:**
```javascript
Forbidden: Cannot access conversation outside your organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
        error: 'Forbidden: Cannot access conversation outside your organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 34. Línea 86

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to view this conversation
```

**Contexto:**
```javascript
return res.status(403).json({ 
        error: 'Forbidden: You must be a participant to view this conversation'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 35. Línea 128

**Mensaje actual:**
```javascript
Forbidden: Cannot access conversations for users outside your organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Cannot access conversations for users outside your organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 36. Línea 142

**Mensaje actual:**
```javascript
Forbidden: Only organization admins can view other users\
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Only organization admins can view other users\'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 37. Línea 155

**Mensaje actual:**
```javascript
Forbidden: You can only view your own conversations
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: You can only view your own conversations'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 38. Línea 176

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 39. Línea 183

**Mensaje actual:**
```javascript
Forbidden: Cannot access conversation outside your organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Cannot access conversation outside your organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 40. Línea 191

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to modify this conversation
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: You must be a participant to modify this conversation'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 41. Línea 221

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 42. Línea 226

**Mensaje actual:**
```javascript
Forbidden: Cannot delete conversation outside your organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
        error: 'Forbidden: Cannot delete conversation outside your organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 43. Línea 241

**Mensaje actual:**
```javascript
Forbidden: Insufficient permissions to permanently delete conversations
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Insufficient permissions to permanently delete conversations'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 44. Línea 248

**Mensaje actual:**
```javascript
Forbidden: Insufficient permissions to permanently delete conversations
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Insufficient permissions to permanently delete conversations'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 45. Línea 309

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 46. Línea 333

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 47. Línea 357

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 48. Línea 381

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

### 📄 membershipController.js

#### 1. Línea 9

**Mensaje actual:**
```javascript
Either userId or organizationId must be provided
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Either userId or organizationId must be provided'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('memberships.either_userid_or_organizationid_must_be_provided')
```

**Clave de traducción:** `memberships.either_userid_or_organizationid_must_be_provided`

---

#### 2. Línea 19

**Mensaje actual:**
```javascript
Forbidden: Cannot access memberships outside your organization context
```

**Contexto:**
```javascript
res.status(403).json({ 
        error: 'Forbidden: Cannot access memberships outside your organization context'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 3. Línea 28

**Mensaje actual:**
```javascript
No tienes permisos para ver todas las membresías de la organización
```

**Contexto:**
```javascript
res.status(403).json({ 
        error: 'No tienes permisos para ver todas las membresías de la organización'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
        error: req.t('memberships.no_tienes_permisos_para_ver_todas_las_membresas_de')
```

**Clave de traducción:** `memberships.no_tienes_permisos_para_ver_todas_las_membresas_de`

---

#### 4. Línea 38

**Mensaje actual:**
```javascript
Error retrieving memberships
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving memberships'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 5. Línea 52

**Mensaje actual:**
```javascript
Error retrieving memberships
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving memberships'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 6. Línea 71

**Mensaje actual:**
```javascript
Forbidden: Only organization admins can view other users\
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Only organization admins can view other users\'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 7. Línea 80

**Mensaje actual:**
```javascript
Forbidden: Cannot access memberships for users outside your organization
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Cannot access memberships for users outside your organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 8. Línea 93

**Mensaje actual:**
```javascript
You can only view your own memberships
```

**Contexto:**
```javascript
res.status(403).json({ 
        error: 'You can only view your own memberships'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
        error: req.t('memberships.you_can_only_view_your_own_memberships')
```

**Clave de traducción:** `memberships.you_can_only_view_your_own_memberships`

---

#### 9. Línea 105

**Mensaje actual:**
```javascript
Missing membership ID in request parameters
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Missing membership ID in request parameters'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('memberships.missing_membership_id_in_request_parameters')
```

**Clave de traducción:** `memberships.missing_membership_id_in_request_parameters`

---

#### 10. Línea 115

**Mensaje actual:**
```javascript
Membership not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Membership not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('memberships.not_found')
```

**Clave de traducción:** `memberships.not_found`

---

#### 11. Línea 127

**Mensaje actual:**
```javascript
Forbidden: Cannot access membership outside your organization context
```

**Contexto:**
```javascript
res.status(403).json({ 
        error: 'Forbidden: Cannot access membership outside your organization context'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 12. Línea 138

**Mensaje actual:**
```javascript
You do not have permission to view this membership
```

**Contexto:**
```javascript
res.status(403).json({ error: 'You do not have permission to view this membership'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('memberships.you_do_not_have_permission_to_view_this_membership')
```

**Clave de traducción:** `memberships.you_do_not_have_permission_to_view_this_membership`

---

#### 13. Línea 146

**Mensaje actual:**
```javascript
Error retrieving membership
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving membership'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 14. Línea 155

**Mensaje actual:**
```javascript
Forbidden: Cannot invite users to organizations outside your context
```

**Contexto:**
```javascript
res.status(403).json({ 
      error: 'Forbidden: Cannot invite users to organizations outside your context'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
      error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 15. Línea 171

**Mensaje actual:**
```javascript
Error inviting user
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error inviting user'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('memberships.error_inviting_user')
```

**Clave de traducción:** `memberships.error_inviting_user`

---

#### 16. Línea 184

**Mensaje actual:**
```javascript
Unauthorized. Only admins can invite users.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. Only admins can invite users.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 17. Línea 196

**Mensaje actual:**
```javascript
Invalid role
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Invalid role'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 18. Línea 203

**Mensaje actual:**
```javascript
Forbidden: Cannot modify membership outside your organization context
```

**Contexto:**
```javascript
res.status(403).json({ 
      error: 'Forbidden: Cannot modify membership outside your organization context'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
      error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 19. Línea 217

**Mensaje actual:**
```javascript
Error updating membership
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error updating membership'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_updating')
```

**Clave de traducción:** `common.error_updating`

---

#### 20. Línea 230

**Mensaje actual:**
```javascript
Unauthorized. Only admins can modify roles.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. Only admins can modify roles.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 21. Línea 243

**Mensaje actual:**
```javascript
Forbidden: Cannot remove membership outside your organization context
```

**Contexto:**
```javascript
res.status(403).json({ 
      error: 'Forbidden: Cannot remove membership outside your organization context'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
      error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 22. Línea 253

**Mensaje actual:**
```javascript
Error removing membership
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error removing membership'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('memberships.error_removing_membership')
```

**Clave de traducción:** `memberships.error_removing_membership`

---

#### 23. Línea 271

**Mensaje actual:**
```javascript
Unauthorized. Only admins can remove members.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. Only admins can remove members.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 24. Línea 9

**Mensaje actual:**
```javascript
Either userId or organizationId must be provided
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Either userId or organizationId must be provided'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('memberships.either_userid_or_organizationid_must_be_provided')
```

**Clave de traducción:** `memberships.either_userid_or_organizationid_must_be_provided`

---

#### 25. Línea 19

**Mensaje actual:**
```javascript
Forbidden: Cannot access memberships outside your organization context
```

**Contexto:**
```javascript
return res.status(403).json({ 
        error: 'Forbidden: Cannot access memberships outside your organization context'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 26. Línea 28

**Mensaje actual:**
```javascript
No tienes permisos para ver todas las membresías de la organización
```

**Contexto:**
```javascript
return res.status(403).json({ 
        error: 'No tienes permisos para ver todas las membresías de la organización'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
        error: req.t('memberships.no_tienes_permisos_para_ver_todas_las_membresas_de')
```

**Clave de traducción:** `memberships.no_tienes_permisos_para_ver_todas_las_membresas_de`

---

#### 27. Línea 52

**Mensaje actual:**
```javascript
Error retrieving memberships
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error retrieving memberships'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 28. Línea 71

**Mensaje actual:**
```javascript
Forbidden: Only organization admins can view other users\
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Only organization admins can view other users\'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 29. Línea 80

**Mensaje actual:**
```javascript
Forbidden: Cannot access memberships for users outside your organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Cannot access memberships for users outside your organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 30. Línea 93

**Mensaje actual:**
```javascript
You can only view your own memberships
```

**Contexto:**
```javascript
return res.status(403).json({ 
        error: 'You can only view your own memberships'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
        error: req.t('memberships.you_can_only_view_your_own_memberships')
```

**Clave de traducción:** `memberships.you_can_only_view_your_own_memberships`

---

#### 31. Línea 105

**Mensaje actual:**
```javascript
Missing membership ID in request parameters
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Missing membership ID in request parameters'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('memberships.missing_membership_id_in_request_parameters')
```

**Clave de traducción:** `memberships.missing_membership_id_in_request_parameters`

---

#### 32. Línea 115

**Mensaje actual:**
```javascript
Membership not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Membership not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('memberships.not_found')
```

**Clave de traducción:** `memberships.not_found`

---

#### 33. Línea 127

**Mensaje actual:**
```javascript
Forbidden: Cannot access membership outside your organization context
```

**Contexto:**
```javascript
return res.status(403).json({ 
        error: 'Forbidden: Cannot access membership outside your organization context'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 34. Línea 138

**Mensaje actual:**
```javascript
You do not have permission to view this membership
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'You do not have permission to view this membership'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('memberships.you_do_not_have_permission_to_view_this_membership')
```

**Clave de traducción:** `memberships.you_do_not_have_permission_to_view_this_membership`

---

#### 35. Línea 155

**Mensaje actual:**
```javascript
Forbidden: Cannot invite users to organizations outside your context
```

**Contexto:**
```javascript
return res.status(403).json({ 
      error: 'Forbidden: Cannot invite users to organizations outside your context'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
      error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 36. Línea 171

**Mensaje actual:**
```javascript
Error inviting user
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error inviting user'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('memberships.error_inviting_user')
```

**Clave de traducción:** `memberships.error_inviting_user`

---

#### 37. Línea 184

**Mensaje actual:**
```javascript
Unauthorized. Only admins can invite users.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. Only admins can invite users.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 38. Línea 196

**Mensaje actual:**
```javascript
Invalid role
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Invalid role'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 39. Línea 203

**Mensaje actual:**
```javascript
Forbidden: Cannot modify membership outside your organization context
```

**Contexto:**
```javascript
return res.status(403).json({ 
      error: 'Forbidden: Cannot modify membership outside your organization context'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
      error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 40. Línea 217

**Mensaje actual:**
```javascript
Error updating membership
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error updating membership'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('common.error_updating')
```

**Clave de traducción:** `common.error_updating`

---

#### 41. Línea 230

**Mensaje actual:**
```javascript
Unauthorized. Only admins can modify roles.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. Only admins can modify roles.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 42. Línea 243

**Mensaje actual:**
```javascript
Forbidden: Cannot remove membership outside your organization context
```

**Contexto:**
```javascript
return res.status(403).json({ 
      error: 'Forbidden: Cannot remove membership outside your organization context'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
      error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 43. Línea 253

**Mensaje actual:**
```javascript
Error removing membership
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error removing membership'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('memberships.error_removing_membership')
```

**Clave de traducción:** `memberships.error_removing_membership`

---

#### 44. Línea 271

**Mensaje actual:**
```javascript
Unauthorized. Only admins can remove members.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. Only admins can remove members.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

### 📄 messageController.js

#### 1. Línea 10

**Mensaje actual:**
```javascript
Conversation ID is required
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Conversation ID is required'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('messages.conversation_id_is_required')
```

**Clave de traducción:** `messages.conversation_id_is_required`

---

#### 2. Línea 17

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 3. Línea 24

**Mensaje actual:**
```javascript
Forbidden: Cannot send message to conversation outside your organization
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Cannot send message to conversation outside your organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 4. Línea 31

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to send messages to this conversation
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: You must be a participant to send messages to this conversation'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 5. Línea 51

**Mensaje actual:**
```javascript
Error creating message
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error creating message'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_creating')
```

**Clave de traducción:** `common.error_creating`

---

#### 6. Línea 63

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 7. Línea 70

**Mensaje actual:**
```javascript
Forbidden: Cannot access conversation outside your organization
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Cannot access conversation outside your organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 8. Línea 77

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to view messages in this conversation
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: You must be a participant to view messages in this conversation'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 9. Línea 89

**Mensaje actual:**
```javascript
Error retrieving messages
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving messages'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 10. Línea 114

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 11. Línea 119

**Mensaje actual:**
```javascript
Forbidden: Cannot access conversation outside your organization
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Cannot access conversation outside your organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 12. Línea 126

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to view messages in this conversation
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: You must be a participant to view messages in this conversation'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 13. Línea 138

**Mensaje actual:**
```javascript
Error retrieving messages
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving messages'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 14. Línea 148

**Mensaje actual:**
```javascript
Invalid message ID format
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Invalid message ID format'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 15. Línea 155

**Mensaje actual:**
```javascript
Message not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Message not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('messages.not_found')
```

**Clave de traducción:** `messages.not_found`

---

#### 16. Línea 165

**Mensaje actual:**
```javascript
Forbidden: Cannot access message outside your organization
```

**Contexto:**
```javascript
res.status(403).json({ 
        error: 'Forbidden: Cannot access message outside your organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 17. Línea 174

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 18. Línea 178

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to view this message
```

**Contexto:**
```javascript
res.status(403).json({ 
        error: 'Forbidden: You must be a participant to view this message'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 19. Línea 187

**Mensaje actual:**
```javascript
Error retrieving message
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving message'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 20. Línea 197

**Mensaje actual:**
```javascript
Invalid message ID format
```

**Contexto:**
```javascript
res.status(400).json({ error: 'Invalid message ID format'
```

**Sugerencia:**
```javascript
res.status(400).json({ error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 21. Línea 204

**Mensaje actual:**
```javascript
Message not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Message not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('messages.not_found')
```

**Clave de traducción:** `messages.not_found`

---

#### 22. Línea 215

**Mensaje actual:**
```javascript
Forbidden: Cannot delete message outside your organization
```

**Contexto:**
```javascript
res.status(403).json({ 
        error: 'Forbidden: Cannot delete message outside your organization'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 23. Línea 236

**Mensaje actual:**
```javascript
Forbidden: Only message sender or organization admin can delete messages
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: Only message sender or organization admin can delete messages'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 24. Línea 249

**Mensaje actual:**
```javascript
Forbidden: You can only delete your own messages
```

**Contexto:**
```javascript
res.status(403).json({ 
          error: 'Forbidden: You can only delete your own messages'
```

**Sugerencia:**
```javascript
res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 25. Línea 257

**Mensaje actual:**
```javascript
Error deleting message
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error deleting message'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_deleting')
```

**Clave de traducción:** `common.error_deleting`

---

#### 26. Línea 10

**Mensaje actual:**
```javascript
Conversation ID is required
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Conversation ID is required'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('messages.conversation_id_is_required')
```

**Clave de traducción:** `messages.conversation_id_is_required`

---

#### 27. Línea 17

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 28. Línea 24

**Mensaje actual:**
```javascript
Forbidden: Cannot send message to conversation outside your organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Cannot send message to conversation outside your organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 29. Línea 31

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to send messages to this conversation
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: You must be a participant to send messages to this conversation'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 30. Línea 63

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 31. Línea 70

**Mensaje actual:**
```javascript
Forbidden: Cannot access conversation outside your organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Cannot access conversation outside your organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 32. Línea 77

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to view messages in this conversation
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: You must be a participant to view messages in this conversation'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 33. Línea 114

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 34. Línea 119

**Mensaje actual:**
```javascript
Forbidden: Cannot access conversation outside your organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Cannot access conversation outside your organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 35. Línea 126

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to view messages in this conversation
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: You must be a participant to view messages in this conversation'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 36. Línea 148

**Mensaje actual:**
```javascript
Invalid message ID format
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Invalid message ID format'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 37. Línea 155

**Mensaje actual:**
```javascript
Message not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Message not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('messages.not_found')
```

**Clave de traducción:** `messages.not_found`

---

#### 38. Línea 165

**Mensaje actual:**
```javascript
Forbidden: Cannot access message outside your organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
        error: 'Forbidden: Cannot access message outside your organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 39. Línea 174

**Mensaje actual:**
```javascript
Conversation not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Conversation not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('conversations.not_found')
```

**Clave de traducción:** `conversations.not_found`

---

#### 40. Línea 178

**Mensaje actual:**
```javascript
Forbidden: You must be a participant to view this message
```

**Contexto:**
```javascript
return res.status(403).json({ 
        error: 'Forbidden: You must be a participant to view this message'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 41. Línea 197

**Mensaje actual:**
```javascript
Invalid message ID format
```

**Contexto:**
```javascript
return res.status(400).json({ error: 'Invalid message ID format'
```

**Sugerencia:**
```javascript
return res.status(400).json({ error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 42. Línea 204

**Mensaje actual:**
```javascript
Message not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Message not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('messages.not_found')
```

**Clave de traducción:** `messages.not_found`

---

#### 43. Línea 215

**Mensaje actual:**
```javascript
Forbidden: Cannot delete message outside your organization
```

**Contexto:**
```javascript
return res.status(403).json({ 
        error: 'Forbidden: Cannot delete message outside your organization'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
        error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 44. Línea 236

**Mensaje actual:**
```javascript
Forbidden: Only message sender or organization admin can delete messages
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: Only message sender or organization admin can delete messages'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

#### 45. Línea 249

**Mensaje actual:**
```javascript
Forbidden: You can only delete your own messages
```

**Contexto:**
```javascript
return res.status(403).json({ 
          error: 'Forbidden: You can only delete your own messages'
```

**Sugerencia:**
```javascript
return res.status(403).json({ 
          error: req.t('common.forbidden')
```

**Clave de traducción:** `common.forbidden`

---

### 📄 organizationController.js

#### 1. Línea 18

**Mensaje actual:**
```javascript
Invalid organization type
```

**Contexto:**
```javascript
res.status(400).json({ 
      error: 'Invalid organization type'
```

**Sugerencia:**
```javascript
res.status(400).json({ 
      error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 2. Línea 31

**Mensaje actual:**
```javascript
Error creating organization
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error creating organization'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_creating')
```

**Clave de traducción:** `common.error_creating`

---

#### 3. Línea 41

**Mensaje actual:**
```javascript
Organization not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Organization not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('organizations.not_found')
```

**Clave de traducción:** `organizations.not_found`

---

#### 4. Línea 49

**Mensaje actual:**
```javascript
Unauthorized. You must be a member to view this organization.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. You must be a member to view this organization.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 5. Línea 53

**Mensaje actual:**
```javascript
Unauthorized. You must be a member to view this organization.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. You must be a member to view this organization.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 6. Línea 64

**Mensaje actual:**
```javascript
Organization not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Organization not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('organizations.not_found')
```

**Clave de traducción:** `organizations.not_found`

---

#### 7. Línea 68

**Mensaje actual:**
```javascript
Organization not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Organization not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('organizations.not_found')
```

**Clave de traducción:** `organizations.not_found`

---

#### 8. Línea 79

**Mensaje actual:**
```javascript
Invalid organization type
```

**Contexto:**
```javascript
res.status(400).json({ 
      error: 'Invalid organization type'
```

**Sugerencia:**
```javascript
res.status(400).json({ 
      error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 9. Línea 92

**Mensaje actual:**
```javascript
Unauthorized. Only admins can update organization details.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. Only admins can update organization details.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 10. Línea 96

**Mensaje actual:**
```javascript
Unauthorized. Only admins can update organization details.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. Only admins can update organization details.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 11. Línea 106

**Mensaje actual:**
```javascript
Organization not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Organization not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('organizations.not_found')
```

**Clave de traducción:** `organizations.not_found`

---

#### 12. Línea 108

**Mensaje actual:**
```javascript
Error updating organization
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error updating organization'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_updating')
```

**Clave de traducción:** `common.error_updating`

---

#### 13. Línea 123

**Mensaje actual:**
```javascript
Unauthorized. Only admins can delete organizations.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. Only admins can delete organizations.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 14. Línea 127

**Mensaje actual:**
```javascript
Unauthorized. Only admins can delete organizations.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. Only admins can delete organizations.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 15. Línea 137

**Mensaje actual:**
```javascript
Organization not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Organization not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('organizations.not_found')
```

**Clave de traducción:** `organizations.not_found`

---

#### 16. Línea 139

**Mensaje actual:**
```javascript
Error deleting organization
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error deleting organization'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_deleting')
```

**Clave de traducción:** `common.error_deleting`

---

#### 17. Línea 152

**Mensaje actual:**
```javascript
Unauthorized. You must be a member to view organization members.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. You must be a member to view organization members.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 18. Línea 155

**Mensaje actual:**
```javascript
Unauthorized. You must be a member to view organization members.
```

**Contexto:**
```javascript
res.status(403).json({ error: 'Unauthorized. You must be a member to view organization members.'
```

**Sugerencia:**
```javascript
res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 19. Línea 163

**Mensaje actual:**
```javascript
Error retrieving organization members
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving organization members'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 20. Línea 178

**Mensaje actual:**
```javascript
Invalid organization type filter
```

**Contexto:**
```javascript
res.status(400).json({ 
      error: 'Invalid organization type filter'
```

**Sugerencia:**
```javascript
res.status(400).json({ 
      error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 21. Línea 193

**Mensaje actual:**
```javascript
Error retrieving organizations
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving organizations'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 22. Línea 200

**Mensaje actual:**
```javascript
Error retrieving organizations
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving organizations'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 23. Línea 213

**Mensaje actual:**
```javascript
Error retrieving organization types
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving organization types'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 24. Línea 226

**Mensaje actual:**
```javascript
Organization type not found
```

**Contexto:**
```javascript
res.status(404).json({ error: 'Organization type not found'
```

**Sugerencia:**
```javascript
res.status(404).json({ error: req.t('organizations.organization_type_not_found')
```

**Clave de traducción:** `organizations.organization_type_not_found`

---

#### 25. Línea 230

**Mensaje actual:**
```javascript
Error retrieving organization type
```

**Contexto:**
```javascript
res.status(500).json({ error: 'Error retrieving organization type'
```

**Sugerencia:**
```javascript
res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 26. Línea 134

**Mensaje actual:**
```javascript
Organization deleted successfully
```

**Contexto:**
```javascript
res.status(200).json({ message: 'Organization deleted successfully'
```

**Sugerencia:**
```javascript
res.status(200).json({ message: req.t('organizations.deleted')
```

**Clave de traducción:** `organizations.deleted`

---

#### 27. Línea 18

**Mensaje actual:**
```javascript
Invalid organization type
```

**Contexto:**
```javascript
return res.status(400).json({ 
      error: 'Invalid organization type'
```

**Sugerencia:**
```javascript
return res.status(400).json({ 
      error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 28. Línea 31

**Mensaje actual:**
```javascript
Error creating organization
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error creating organization'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('common.error_creating')
```

**Clave de traducción:** `common.error_creating`

---

#### 29. Línea 41

**Mensaje actual:**
```javascript
Organization not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Organization not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('organizations.not_found')
```

**Clave de traducción:** `organizations.not_found`

---

#### 30. Línea 49

**Mensaje actual:**
```javascript
Unauthorized. You must be a member to view this organization.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. You must be a member to view this organization.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 31. Línea 53

**Mensaje actual:**
```javascript
Unauthorized. You must be a member to view this organization.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. You must be a member to view this organization.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 32. Línea 64

**Mensaje actual:**
```javascript
Organization not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Organization not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('organizations.not_found')
```

**Clave de traducción:** `organizations.not_found`

---

#### 33. Línea 68

**Mensaje actual:**
```javascript
Organization not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Organization not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('organizations.not_found')
```

**Clave de traducción:** `organizations.not_found`

---

#### 34. Línea 79

**Mensaje actual:**
```javascript
Invalid organization type
```

**Contexto:**
```javascript
return res.status(400).json({ 
      error: 'Invalid organization type'
```

**Sugerencia:**
```javascript
return res.status(400).json({ 
      error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 35. Línea 92

**Mensaje actual:**
```javascript
Unauthorized. Only admins can update organization details.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. Only admins can update organization details.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 36. Línea 96

**Mensaje actual:**
```javascript
Unauthorized. Only admins can update organization details.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. Only admins can update organization details.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 37. Línea 106

**Mensaje actual:**
```javascript
Organization not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Organization not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('organizations.not_found')
```

**Clave de traducción:** `organizations.not_found`

---

#### 38. Línea 108

**Mensaje actual:**
```javascript
Error updating organization
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error updating organization'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('common.error_updating')
```

**Clave de traducción:** `common.error_updating`

---

#### 39. Línea 123

**Mensaje actual:**
```javascript
Unauthorized. Only admins can delete organizations.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. Only admins can delete organizations.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 40. Línea 127

**Mensaje actual:**
```javascript
Unauthorized. Only admins can delete organizations.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. Only admins can delete organizations.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 41. Línea 137

**Mensaje actual:**
```javascript
Organization not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Organization not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('organizations.not_found')
```

**Clave de traducción:** `organizations.not_found`

---

#### 42. Línea 139

**Mensaje actual:**
```javascript
Error deleting organization
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error deleting organization'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('common.error_deleting')
```

**Clave de traducción:** `common.error_deleting`

---

#### 43. Línea 152

**Mensaje actual:**
```javascript
Unauthorized. You must be a member to view organization members.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. You must be a member to view organization members.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 44. Línea 155

**Mensaje actual:**
```javascript
Unauthorized. You must be a member to view organization members.
```

**Contexto:**
```javascript
return res.status(403).json({ error: 'Unauthorized. You must be a member to view organization members.'
```

**Sugerencia:**
```javascript
return res.status(403).json({ error: req.t('common.unauthorized')
```

**Clave de traducción:** `common.unauthorized`

---

#### 45. Línea 163

**Mensaje actual:**
```javascript
Error retrieving organization members
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error retrieving organization members'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 46. Línea 178

**Mensaje actual:**
```javascript
Invalid organization type filter
```

**Contexto:**
```javascript
return res.status(400).json({ 
      error: 'Invalid organization type filter'
```

**Sugerencia:**
```javascript
return res.status(400).json({ 
      error: req.t('validation.invalid')
```

**Clave de traducción:** `validation.invalid`

---

#### 47. Línea 193

**Mensaje actual:**
```javascript
Error retrieving organizations
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error retrieving organizations'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 48. Línea 200

**Mensaje actual:**
```javascript
Error retrieving organizations
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error retrieving organizations'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 49. Línea 213

**Mensaje actual:**
```javascript
Error retrieving organization types
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error retrieving organization types'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

#### 50. Línea 226

**Mensaje actual:**
```javascript
Organization type not found
```

**Contexto:**
```javascript
return res.status(404).json({ error: 'Organization type not found'
```

**Sugerencia:**
```javascript
return res.status(404).json({ error: req.t('organizations.organization_type_not_found')
```

**Clave de traducción:** `organizations.organization_type_not_found`

---

#### 51. Línea 230

**Mensaje actual:**
```javascript
Error retrieving organization type
```

**Contexto:**
```javascript
return res.status(500).json({ error: 'Error retrieving organization type'
```

**Sugerencia:**
```javascript
return res.status(500).json({ error: req.t('common.error_retrieving')
```

**Clave de traducción:** `common.error_retrieving`

---

## 🆕 Nuevas Claves de Traducción Necesarias

### admin.json

```json
"se_requiere_una_lista_vlida_de_ids_de_usuario": "Se requiere una lista válida de IDs de usuario",
"se_requiere_especificar_una_accin": "Se requiere especificar una acción",
"se_requiere_especificar_un_rol": "Se requiere especificar un rol",
"accin_no_soportada": "Acción no soportada",
"error_en_accin_masiva": "Error en acción masiva",
"se_requiere_un_correo_electrnico": "Se requiere un correo electrónico",
"error_al_generar_invitacin": "Error al generar invitación",
"error_al_recuperar_usuarios": "Error al recuperar usuarios",
"error_inesperado": "Error inesperado",
"error_al_recuperar_mascotas": "Error al recuperar mascotas",
"error_inesperado": "Error inesperado",
"no_tienes_permiso_para_realizar_esta_accin": "No tienes permiso para realizar esta acción",
"error_al_actualizar_mascota": "Error al actualizar mascota",
"error_inesperado": "Error inesperado",
"no_permission_to_update_user_in_this_organization": "No permission to update user in this organization",
"solo_los_administradores_pueden_cambiar_roles": "Solo los administradores pueden cambiar roles",
"error_al_actualizar_usuario": "Error al actualizar usuario",
"error_inesperado": "Error inesperado",
"no_permission_to_delete_user_in_this_organization": "No permission to delete user in this organization",
"error_al_eliminar_usuario": "Error al eliminar usuario",
"error_inesperado": "Error inesperado",
"no_permission_to_update_user_role_in_this_organiza": "No permission to update user role in this organization",
"se_requiere_especificar_un_rol": "Se requiere especificar un rol",
"error_al_actualizar_rol_en_autenticacin": "Error al actualizar rol en autenticación",
"error_al_actualizar_rol_en_base_de_datos": "Error al actualizar rol en base de datos",
"error_inesperado": "Error inesperado",
"email_and_password_are_required": "Email and password are required",
"error_al_crear_usuario_en_base_de_datos": "Error al crear usuario en base de datos",
"accin_": "Acción ",
"invitacin_generada_correctamente": "Invitación generada correctamente",
"rol_actualizado_correctamente_a_": "Rol actualizado correctamente a ",
"se_requiere_una_lista_vlida_de_ids_de_usuario": "Se requiere una lista válida de IDs de usuario",
"se_requiere_especificar_una_accin": "Se requiere especificar una acción",
"se_requiere_especificar_un_rol": "Se requiere especificar un rol",
"accin_no_soportada": "Acción no soportada",
"se_requiere_un_correo_electrnico": "Se requiere un correo electrónico",
"error_al_recuperar_usuarios": "Error al recuperar usuarios",
"error_al_recuperar_mascotas": "Error al recuperar mascotas",
"no_tienes_permiso_para_realizar_esta_accin": "No tienes permiso para realizar esta acción",
"error_al_actualizar_mascota": "Error al actualizar mascota",
"no_permission_to_update_user_in_this_organization": "No permission to update user in this organization",
"solo_los_administradores_pueden_cambiar_roles": "Solo los administradores pueden cambiar roles",
"error_al_actualizar_usuario": "Error al actualizar usuario",
"no_permission_to_delete_user_in_this_organization": "No permission to delete user in this organization",
"error_al_eliminar_usuario": "Error al eliminar usuario",
"no_permission_to_update_user_role_in_this_organiza": "No permission to update user role in this organization",
"se_requiere_especificar_un_rol": "Se requiere especificar un rol",
"error_al_actualizar_rol_en_autenticacin": "Error al actualizar rol en autenticación",
"error_al_actualizar_rol_en_base_de_datos": "Error al actualizar rol en base de datos",
"email_and_password_are_required": "Email and password are required",
"error_al_crear_usuario_en_base_de_datos": "Error al crear usuario en base de datos",
```

### auth.json

```json
"refresh_token_requerido": "Refresh token requerido",
"refresh_token_invlido_o_expirado": "Refresh token inválido o expirado",
"refresh_token_requerido": "Refresh token requerido",
"refresh_token_invlido_o_expirado": "Refresh token inválido o expirado",
```

### conversations.json

```json
"participants_must_be_an_array_with_at_least_two_pa": "Participants must be an array with at least two participants",
"error_verifying_organization_membership": "Error verifying organization membership",
"error_soft_deleting_conversation": "Error soft deleting conversation",
"error_permanently_deleting_conversation": "Error permanently deleting conversation",
"participants_must_be_an_array_with_at_least_two_pa": "Participants must be an array with at least two participants",
"error_verifying_organization_membership": "Error verifying organization membership",
```

### memberships.json

```json
"either_userid_or_organizationid_must_be_provided": "Either userId or organizationId must be provided",
"no_tienes_permisos_para_ver_todas_las_membresas_de": "No tienes permisos para ver todas las membresías de la organización",
"you_can_only_view_your_own_memberships": "You can only view your own memberships",
"missing_membership_id_in_request_parameters": "Missing membership ID in request parameters",
"you_do_not_have_permission_to_view_this_membership": "You do not have permission to view this membership",
"error_inviting_user": "Error inviting user",
"error_removing_membership": "Error removing membership",
"either_userid_or_organizationid_must_be_provided": "Either userId or organizationId must be provided",
"no_tienes_permisos_para_ver_todas_las_membresas_de": "No tienes permisos para ver todas las membresías de la organización",
"you_can_only_view_your_own_memberships": "You can only view your own memberships",
"missing_membership_id_in_request_parameters": "Missing membership ID in request parameters",
"you_do_not_have_permission_to_view_this_membership": "You do not have permission to view this membership",
"error_inviting_user": "Error inviting user",
"error_removing_membership": "Error removing membership",
```

### messages.json

```json
"conversation_id_is_required": "Conversation ID is required",
"conversation_id_is_required": "Conversation ID is required",
```

### organizations.json

```json
"organization_type_not_found": "Organization type not found",
"organization_type_not_found": "Organization type not found",
```

## 🚀 Instrucciones de Migración

### 1. Actualizar app.js
Agregar los middlewares de i18n:

```javascript
const { languageDetection } = require('./middlewares/languageDetection');
const { responseFormatter } = require('./middlewares/responseFormatter');

// Después de los middlewares de autenticación
app.use(languageDetection);
app.use(responseFormatter);
```

### 2. Migrar controladores
Para cada controlador, reemplazar los mensajes hardcodeados con las claves sugeridas.

### 3. Usar métodos helper
Aprovechar los nuevos métodos del middleware responseFormatter:

```javascript
// Antes
res.status(400).json({ error: 'Validation failed' });

// Después
res.error('validation.failed', 400);

// O usar métodos específicos
res.validationError([
  { field: 'email', messageKey: 'validation.invalid_email' }
]);
```

### 4. Agregar traducciones faltantes
Agregar las nuevas claves identificadas a los archivos de traducción correspondientes.

### 5. Testing
Probar cada endpoint con diferentes idiomas usando el parámetro `?lang=es` o `?lang=en`.

## ✅ Checklist de Migración

- [ ] Actualizar app.js con middlewares i18n
- [ ] Migrar authController.js
- [ ] Migrar petController.js
- [ ] Migrar userController.js
- [ ] Migrar organizationController.js
- [ ] Migrar conversationController.js
- [ ] Migrar messageController.js
- [ ] Migrar membershipController.js
- [ ] Migrar adminController.js
- [ ] Agregar traducciones faltantes
- [ ] Ejecutar tests de integración
- [ ] Validar respuestas en ambos idiomas

---

**Generado el:** 2025-06-02T01:46:00.537Z
**Script:** migrate-controllers-i18n.js
