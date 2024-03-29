/**
Copyright (C) 2014 Mokoversity Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

exports.init = function (req, res, next)
{
	var workflow = new req.app.utility.workflow(req, res);
	
    workflow.on('render', function() {
        res.render('index', {
        });
    });

    return workflow.emit('render');
};

exports.about = function (req, res, next)
{
	var workflow = new req.app.utility.workflow(req, res);
	
    workflow.on('render', function() {
        res.render('about', {
        });
    });

    return workflow.emit('render');
};